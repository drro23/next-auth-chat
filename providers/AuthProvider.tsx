import nookies from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import FireBase from "../config/firebase";

const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebase.User>(null);
  const firebase = new FireBase();

  useEffect(() => {
    return firebase.auth.onIdTokenChanged(async (user: firebase.User) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, "token", token, {});
      }
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebase.auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
    return useContext(AuthContext);
}
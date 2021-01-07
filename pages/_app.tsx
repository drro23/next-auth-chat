import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/tailwind.scss";
import "../styles/signup.scss";
// import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import appStore from "../store";
import { AuthProvider } from "../providers/AuthProvider";
// import { toast } from "react-toastify";

export default function NextAuthChat({ Component, pageProps }: AppProps) {
  // toast.configure();

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/1fe2a9290d.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Provider store={appStore.store}>
        <PersistGate loading={null} persistor={appStore.persistor}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

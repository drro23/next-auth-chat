import FireBase from "../config/firebase";
import { ISignUpFormInput } from "../components/SignUpForm/SignUpForm";

export interface IDataLogin {
  email: string;
  password: string;
}

export default class AuthService {
  private _firebase: any;

  constructor() {
    this._firebase = new FireBase();
  }

  public async signUp(data: ISignUpFormInput) {
    let userCredential = null;
    try {
      userCredential = await this._firebase.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log('userCredentials: ', userCredential);
      console.log('userCredentials user: ', userCredential.user);
      this._firebase.db.ref('users/' + userCredential.user.uid).set({
        username: userCredential.user.displayName,
        email: userCredential.user.email,
        phone: userCredential.user.phoneNumber,
        photoURL: userCredential.user.photoURL,
      })
    } catch(e) {
      console.log("signUp error: ", e.message);
    }

    return userCredential;
  }

  public async login(data: IDataLogin) {
    let res = null;
    try {
      res = await this._firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
    } catch (e) {
      console.log("login error ", e);
    }

    return res;
  }

  public async logout() {
    try {
      await this._firebase.auth.signOut();
    } catch (e) {
      console.log(e);
    }
  }
}
import FireBase from "../config/firebase";

interface IDataLogin {
  email: string;
  password: string;
}

export default class AuthService {
  private _firebase;

  constructor() {
    this._firebase = new FireBase();
  }

  public async login(data: IDataLogin) {
    let res = null;
    try {
      res = await this._firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    return res;
  }

  public async signOut() {
    try {
      let res = await this._firebase.auth.signOut();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
}

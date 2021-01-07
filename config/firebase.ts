import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// const app = firebase.apps.length
//   ? firebase.app()
//   : firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// const firestore = firebase.firestore();

// export { app, auth, firebase, firestore };

export default class FireBase {
  private _app: any;
  private _auth: any;
  private _firebase: any;
  private _firestore: any;
  private _database: any;

  constructor() {
    this._firebase = firebase;

    if (firebase.apps.length) this._app = this._firebase.app();
    else this._app = this._firebase.initializeApp(firebaseConfig);

    this._auth = this._app.auth();
    this._firestore = this._app.firestore();
    this._database = this._firebase.database();
  }

  get app(): any {
    return this._app;
  }

  get auth(): any {
    return this._auth;
  }

  get firestore(): any {
    return this._firestore;
  }

  get firebase(): any {
    return this._firebase;
  }

  get db(): any {
    return this._database;
  }

  async uploadImage(file: File) {
    let storage = this._app.storage();
    console.log(storage);
    let storageRef = storage.ref();
    console.log(storageRef);

    try {
      const fileRef = storageRef.child(file.name);
      const snapshot = await fileRef.put(file);
      console.log(snapshot);
    } catch (err) {
      console.log('image upload fail: ', err);
    }
  }

  async getImageUrl(fileName: string) {
    const storageRef = this._app.storage().ref();
    let imageRef = storageRef.child(fileName);
    let url = await imageRef.getDownloadURL();
    console.log(url);
    return url;
  }
}

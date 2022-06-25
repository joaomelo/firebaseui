import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import config from "./firebase.config";

const app = firebase.initializeApp(config);
const auth = app.auth();
const ui = new firebaseui.auth.AuthUI(auth);

export default {
  signOut: () => "TODO",
  onChanged: (callback) => auth.onAuthStateChanged(callback),
  uiStart: () => "TODO",
};

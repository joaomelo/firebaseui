import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import config from "./firebase.config";

const app = firebase.initializeApp(config);
const auth = app.auth();
const ui = new firebaseui.auth.AuthUI(auth);

export default {
  signOut: () => () => auth.signOut(),
  onChanged: (callback) => auth.onAuthStateChanged(callback),
  uiStart: () => (target) =>
    ui.start(target, {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    }),
};

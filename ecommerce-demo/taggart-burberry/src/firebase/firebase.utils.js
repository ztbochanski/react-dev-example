import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEx-kF13FTtNHv9HVWkhba0aQsPEJ-qjg",
  authDomain: "react-demo-3a20e.firebaseapp.com",
  databaseURL: "https://react-demo-3a20e.firebaseio.com",
  projectId: "react-demo-3a20e",
  storageBucket: "react-demo-3a20e.appspot.com",
  messagingSenderId: "551606600968",
  appId: "1:551606600968:web:58c88cd8453d86679058bd",
  measurementId: "G-JS6HV1ZLES",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

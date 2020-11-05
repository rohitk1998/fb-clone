import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMvtFA0mukrCQJ6V-cOYqhK5B4Q2pbJPo",
  authDomain: "facebook-clone-cdebc.firebaseapp.com",
  databaseURL: "https://facebook-clone-cdebc.firebaseio.com",
  projectId: "facebook-clone-cdebc",
  storageBucket: "facebook-clone-cdebc.appspot.com",
  messagingSenderId: "43116320942",
  appId: "1:43116320942:web:dad01e2dae7bea0135b53f",
  measurementId: "G-3S8KK953LQ",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

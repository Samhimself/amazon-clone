import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDc90Bp1tL2fpr4p9UKXEldL6dSHcg3qjo",
  authDomain: "clone-6ed45.firebaseapp.com",
  projectId: "clone-6ed45",
  storageBucket: "clone-6ed45.appspot.com",
  messagingSenderId: "85108596841",
  appId: "1:85108596841:web:ed9228385dcb8b0f7142f8",
  measurementId: "G-YC7CZ3Q55E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

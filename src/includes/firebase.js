import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyMoJA_R_LEFdQudsh1DVK3PGmhCdghA4",
  authDomain: "music-16668.firebaseapp.com",
  projectId: "music-16668",
  storageBucket: "music-16668.appspot.com",
  messagingSenderId: "889098174437",
  appId: "1:889098174437:web:bd1ae775ae3fdf34a6390c",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };

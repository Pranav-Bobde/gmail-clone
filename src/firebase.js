import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-CVatzEKcqi-LbLzEmUnhUEyhwLeDdIk",
  authDomain: "clone-fdcb8.firebaseapp.com",
  projectId: "clone-fdcb8",
  storageBucket: "clone-fdcb8.appspot.com",
  messagingSenderId: "527448871928",
  appId: "1:527448871928:web:6bf082cc83b2c276a93c0d",
  measurementId: "G-7E94HRW70Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
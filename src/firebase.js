// Import: Firebase
import firebase from "firebase";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP1ENnRaaA8MyhclbidKrqfVKG_LeuRHg",
  authDomain: "rizji-network.firebaseapp.com",
  databaseURL: "https://rizji-network.firebaseio.com",
  projectId: "rizji-network",
  storageBucket: "rizji-network.appspot.com",
  messagingSenderId: "736576743127",
  appId: "1:736576743127:web:f0b23585c9721016e8b292",
  measurementId: "G-QKZWGSK9L8",
};

// Initializes app with rizji Firebase configuration
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Access to Firebase Firestore DB
const db = firebaseApp.firestore();

// Enables sign-in authentication via Firebase
const auth = firebase.auth();

// Enables Google authentication via Firebase
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Export: auth, provider
export { auth, googleProvider };

// Export: db
export default db;

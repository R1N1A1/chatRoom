
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Zmvj7vwYFxDACY1jz2Gh00lE19Nq1jg",
  authDomain: "chatkitty-example-663fe.firebaseapp.com",
  projectId: "chatkitty-example-663fe",
  storageBucket: "chatkitty-example-663fe.appspot.com",
  messagingSenderId: "893549932571",
  appId: "1:893549932571:web:5f1d5af16b33bddb1548be",
  measurementId: "G-MWEPWR3QKB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


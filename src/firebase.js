import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDoc,
  doc,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFld2RPYbMfaMOu-9qHS9-1NIcEhfV-Mg",
  authDomain: "clone-9d4ac.firebaseapp.com",
  projectId: "clone-9d4ac",
  storageBucket: "clone-9d4ac.appspot.com",
  messagingSenderId: "244921271887",
  appId: "1:244921271887:web:b09aabdf7a6f28a62b8c3a",
  measurementId: "G-1V2PY1LM1Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, addDoc, getDoc, collection, query, doc };

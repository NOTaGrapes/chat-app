import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1ahVPCxX-HL41XfPMGgs0XzdfVtm41I8",
  authDomain: "chat-849ce.firebaseapp.com",
  databaseURL: "https://chat-849ce-default-rtdb.firebaseio.com",
  projectId: "chat-849ce",
  storageBucket: "chat-849ce.appspot.com",
  messagingSenderId: "781353094979",
  appId: "1:781353094979:web:566b6e1334421ef60fa9f6",
  measurementId: "G-JCP80WX5N9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };


import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPPlj7bXPF63_WcKqL2vWMTLXTuFcu6Nw",
  authDomain: "booking-room-native.firebaseapp.com",
  projectId: "booking-room-native",
  storageBucket: "booking-room-native.appspot.com",
  messagingSenderId: "878081767198",
  appId: "1:878081767198:web:16fe1f64727ec435ec7b0f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();
connectFirestoreEmulator(db, '127.0.0.1', 8080);
export {auth,db};
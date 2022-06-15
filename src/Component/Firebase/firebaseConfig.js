// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9mLVS-ERJQIOEaeJoPth35U2tN-1ktSw",
  authDomain: "my-bluetooth-76594.firebaseapp.com",
  databaseURL: "https://my-bluetooth-76594.firebaseio.com",
  projectId: "my-bluetooth-76594",
  storageBucket: "my-bluetooth-76594.appspot.com",
  messagingSenderId: "786594850868",
  appId: "1:786594850868:web:08b67a1b1e75e50e61c261",
  measurementId: "G-550J0BNLPB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

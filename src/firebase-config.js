// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1VPuzTxg4MU-CWtjG3d_IuiZoWPBdMjg",
  authDomain: "chatapp-2ed9c.firebaseapp.com",
  projectId: "chatapp-2ed9c",
  storageBucket: "chatapp-2ed9c.appspot.com",
  messagingSenderId: "221820945964",
  appId: "1:221820945964:web:9b4fc709ee48a45a0fb389",
  measurementId: "G-5WVWC7VS2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
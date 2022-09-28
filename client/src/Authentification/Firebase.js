// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_1Jq_NVs573KFznHrCjH92cmYM1cuZyA",
  authDomain: "login-edb78.firebaseapp.com",
  projectId: "login-edb78",
  storageBucket: "login-edb78.appspot.com",
  messagingSenderId: "353564614862",
  appId: "1:353564614862:web:dc611aaed32f1c02d6709f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
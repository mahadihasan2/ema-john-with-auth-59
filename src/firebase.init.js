// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYyZozPGnB7Bbt4_62lJEC-lq2OjbV7Bg",
  authDomain: "ema-john-simple-auth-9fc7a.firebaseapp.com",
  projectId: "ema-john-simple-auth-9fc7a",
  storageBucket: "ema-john-simple-auth-9fc7a.appspot.com",
  messagingSenderId: "649583745483",
  appId: "1:649583745483:web:dcffb4861579d10dcb3e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF_B-xSGY1stgfFtIPOFFq_SFZ5a0uKTQ",
  authDomain: "toolbox-b1d3d.firebaseapp.com",
  projectId: "toolbox-b1d3d",
  storageBucket: "toolbox-b1d3d.firebasestorage.app",
  messagingSenderId: "347113462281",
  appId: "1:347113462281:web:0bdb00fb8a6f0a98def6d8",
  measurementId: "G-Y0LQZ7850G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
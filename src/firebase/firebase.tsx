// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoIAofSOp02_atgm26FKWxNPHDoOIl_wY",
  authDomain: "scissors-c514d.firebaseapp.com",
  projectId: "scissors-c514d",
  storageBucket: "scissors-c514d.appspot.com",
  messagingSenderId: "399240839832",
  appId: "1:399240839832:web:345251074e41e2212206ed",
  measurementId: "G-YKPFR1GRJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { app, auth};
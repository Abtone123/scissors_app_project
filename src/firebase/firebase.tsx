import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoIAofSOp02_atgm26FKWxNPHDoOIl_wY",
  authDomain: "scissors-c514d.firebaseapp.com",
  projectId: "scissors-c514d",
  storageBucket: "scissors-c514d.appspot.com",
  messagingSenderId: "399240839832",
  appId: "1:399240839832:web:345251074e41e2212206ed",
  measurementId: "G-YKPFR1GRJ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };

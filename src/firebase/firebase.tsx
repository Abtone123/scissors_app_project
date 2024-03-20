// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAoIAofSOp02_atgm26FKWxNPHDoOIl_wY",
//   authDomain: "scissors-c514d.firebaseapp.com",
//   projectId: "scissors-c514d",
//   storageBucket: "scissors-c514d.appspot.com",
//   messagingSenderId: "399240839832",
//   appId: "1:399240839832:web:345251074e41e2212206ed",
//   measurementId: "G-YKPFR1GRJ2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // const analytics = getAnalytics(app);

// // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDb3fXvwnlW3k0feJFPZMZsMFMjdvI3Fg",
  authDomain: "abtone-e28f7.firebaseapp.com",
  projectId: "abtone-e28f7",
  storageBucket: "abtone-e28f7.appspot.com",
  messagingSenderId: "869194111240",
  appId: "1:869194111240:web:c0b64829afcf12e982b4bd",
  measurementId: "G-XVN9HV6ZLE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

console.log(analytics);

export { app, auth };

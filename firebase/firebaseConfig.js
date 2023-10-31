import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore}from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzDiDYGLi4yuQPmnW6Zqgk4VYzOPvO87M",
  authDomain: "learning-management-syst-31703.firebaseapp.com",
  projectId: "learning-management-syst-31703",
  storageBucket: "learning-management-syst-31703.appspot.com",
  messagingSenderId: "748147448277",
  appId: "1:748147448277:web:32d530514a1614c5bc055c",
  measurementId: "G-PB7DSH9BCE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FirebaseDb = getFirestore(app)
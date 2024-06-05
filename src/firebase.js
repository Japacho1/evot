// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHo-Bzp47Ry8TvfEP7SYTASeasLLoALPY",
  authDomain: "evot-d3b33.firebaseapp.com",
  projectId: "evot-d3b33",
  storageBucket: "evot-d3b33.appspot.com",
  messagingSenderId: "623572797504",
  appId: "1:623572797504:web:d9c5d43f925cc8e95137a5",
  measurementId: "G-53QZH7DZW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
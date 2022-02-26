// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZWtwfJuVN5r001GPf6W2Ak_k-hjJRSgw",
  authDomain: "carsell-137bb.firebaseapp.com",
  databaseURL:
    "https://carsell-137bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "carsell-137bb",
  storageBucket: "carsell-137bb.appspot.com",
  messagingSenderId: "572337113898",
  appId: "1:572337113898:web:ca7eb859ab71cffcecac53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

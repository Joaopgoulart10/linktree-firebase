// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0G9gB6Ufmq_wQah95Q-EuV7e4gAhtQTw",
  authDomain: "linktree-react-64143.firebaseapp.com",
  projectId: "linktree-react-64143",
  storageBucket: "linktree-react-64143.appspot.com",
  messagingSenderId: "990132119713",
  appId: "1:990132119713:web:9a71a2bf7c3883fbc7a8e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};

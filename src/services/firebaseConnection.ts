
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCuBYRWEngVOoUET6KXSj4w1yVKBRFbsuY",
  authDomain: "reactlinktree-9a8ad.firebaseapp.com",
  projectId: "reactlinktree-9a8ad",
  storageBucket: "reactlinktree-9a8ad.appspot.com",
  messagingSenderId: "1089894893168",
  appId: "1:1089894893168:web:4209fa2294c6909ce1d6b5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//exportando o auth e o db, deixamos qualquer arquivo utilizar eles, parte de auteticacao e db
export {auth, db};
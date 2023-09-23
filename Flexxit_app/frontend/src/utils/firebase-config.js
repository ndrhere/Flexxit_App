import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRf5V1bDDXkHvn62EJwB1dHkDSACN5-Tg",
  authDomain: "react-netflix-clone-fae8e.firebaseapp.com",
  projectId: "react-netflix-clone-fae8e",
  storageBucket: "react-netflix-clone-fae8e.appspot.com",
  messagingSenderId: "857679751103",
  appId: "1:857679751103:web:4c34d2571d694d1845e30a",
  measurementId: "G-R71D4MFH5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);

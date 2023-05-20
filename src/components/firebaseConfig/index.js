import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
function StartFirebase(){
const firebaseConfig = {
    apiKey: "AIzaSyA8MUfwbFU2MpcYgUqbajOIgaPH_JLmc2c",
  authDomain: "crud-firebase-66d0b.firebaseapp.com",
  databaseURL: "https://crud-firebase-66d0b-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-66d0b",
  storageBucket: "crud-firebase-66d0b.appspot.com",
  messagingSenderId: "56961373178",
  appId: "1:56961373178:web:4c04c2eaf020293a660a43"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;

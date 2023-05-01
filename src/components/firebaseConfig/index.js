import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
function StartFirebase(){
const firebaseConfig = {
    apiKey: "AIzaSyDOdwCDL8oiELp4h-1OZ31kI_pwYW-3owk",
    authDomain: "crud-application-act2g.firebaseapp.com",
    databaseURL: "https://crud-application-act2g-default-rtdb.firebaseio.com",
    projectId: "crud-application-act2g",
    storageBucket: "crud-application-act2g.appspot.com",
    messagingSenderId: "469624463964",
    appId: "1:469624463964:web:3135b5a35f6905e8b27c99"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
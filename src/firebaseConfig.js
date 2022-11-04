import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgg9fk_3lIFMLJ1sq7HTQuKfOsFIWiNTY",
  authDomain: "nazamb-8ef9b.firebaseapp.com",
  projectId: "nazamb-8ef9b",
  storageBucket: "nazamb-8ef9b.appspot.com",
  messagingSenderId: "245839540800",
  appId: "1:245839540800:web:3f2b130ee260ce87bce5a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//connect to firebase db
export const db = getFirestore(app);

//connect proj with auth service of firebase
export const auth =getAuth(app);
export default app;
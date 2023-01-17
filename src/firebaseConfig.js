import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCTtUkuWmwihqXRibh-U4otryWau6vAnkI",
  authDomain: "pilotech-27fbb.firebaseapp.com",
  projectId: "pilotech-27fbb",
  storageBucket: "pilotech-27fbb.appspot.com",
  messagingSenderId: "926965411556",
  appId: "1:926965411556:web:717af299c9717097a786f1"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
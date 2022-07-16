import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtdACqUi3SxrMCoeHpbUjyOGC9eJlADtI",
  authDomain: "miniblog-ae47b.firebaseapp.com",
  projectId: "miniblog-ae47b",
  storageBucket: "miniblog-ae47b.appspot.com",
  messagingSenderId: "451905563882",
  appId: "1:451905563882:web:96379be9e9ef0ce4233b93",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

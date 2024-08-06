import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCX7pnlgFkl_wmDJSJAeHRKMMg13xom5Bw",
    authDomain: "querydocs-c5cba.firebaseapp.com",
    projectId: "querydocs-c5cba",
    storageBucket: "querydocs-c5cba.appspot.com",
    messagingSenderId: "852727970165",
    appId: "1:852727970165:web:902a4bd5ff9ccbb574bb3c",
    measurementId: "G-EPBHREENTE"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const db = getFirestore(app);
  const storage = getStorage(app)

  export { db, storage }


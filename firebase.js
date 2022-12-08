import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzKx8poSDxCoIr81JyFz_IOQiAQjFLg-Q",
    authDomain: "webproject-18ac2.firebaseapp.com",
    projectId: "webproject-18ac2",
    storageBucket: "webproject-18ac2.appspot.com",
    messagingSenderId: "611256599247",
    appId: "1:611256599247:web:fcdc48de4e168a3ca32dba",
    measurementId: "G-NXNMYRKB3G"
  };
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const database = getFirestore();
  
  export {app, database};
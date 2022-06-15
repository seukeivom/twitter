// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getFireStore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-clone-e2992.firebaseapp.com",
  projectId: "twitter-clone-e2992",
  storageBucket: "twitter-clone-e2992.appspot.com",
  messagingSenderId: "187577141617",
  appId: "1:187577141617:web:82b30ba7475e3200110ed0"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFireStore(app)
const storage = getStorage(app);

export {app, db, storage};
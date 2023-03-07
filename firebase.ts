import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const config = {
    apiKey: process.env.firebase_api_key,
    authDomain: "web-scraper-8371c.firebaseapp.com",
    projectId: "web-scraper-8371c",
    storageBucket: "web-scraper-8371c.appspot.com",
    messagingSenderId: "391011597366",
    appId: "1:391011597366:web:e69608ffe419953ef8ac97"
}

const app = getApps().length ? getApp() : initializeApp(config);
export const db = getFirestore(app);
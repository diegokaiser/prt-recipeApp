import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDrNm4UDcg2QLZnFbmonL2y9jQ9djrxC3g",
  authDomain: "prt-recipeapp-f5d1d.firebaseapp.com",
  projectId: "prt-recipeapp-f5d1d",
  storageBucket: "prt-recipeapp-f5d1d.appspot.com",
  messagingSenderId: "148440642192",
  appId: "1:148440642192:web:176b2aee6e3b68f6eb5e15"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
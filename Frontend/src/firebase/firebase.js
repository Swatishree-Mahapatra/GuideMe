import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAgqWyn79ffwVe7ppcQnEl87OMbRlvWwAo",
  authDomain: "auth-hackodisha.firebaseapp.com",
  projectId: "auth-hackodisha",
  storageBucket: "auth-hackodisha.appspot.com",
  messagingSenderId: "56707472793",
  appId: "1:56707472793:web:ef19848887f01f8a750708"
});

export const auth = app.auth()
export default app;
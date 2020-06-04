import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyDkkZXVkYagLgmvB977Y8OjXSIDHsUPXnU",
    authDomain: "skincare-firestore.firebaseapp.com",
    databaseURL: "https://skincare-firestore.firebaseio.com",
    projectId: "skincare-firestore",
    storageBucket: "skincare-firestore.appspot.com",
    messagingSenderId: "878440964418",
    appId: "1:878440964418:web:3a5df809712bd1842aa8db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()


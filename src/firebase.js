// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import  firebase  from 'firebase/compat/app';
import firestore from "firebase/compat/firestore";
import auth from 'firebase/compat/auth';
//import { initializeApp } from "firebase/app";
//import 'firebase/firestore';
//import firestore from 'firebase'
//import { firebase } from '@firebase/compat/app';
//import '@firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmtI5y7R57TvhoIuiCqfvCw49amDGW92A",
  authDomain: "clone-10d6b.firebaseapp.com",
  databaseURL: "https://clone-10d6b.firebaseio.com",
  projectId: "clone-10d6b",
  storageBucket: "clone-10d6b.appspot.com",
  messagingSenderId: "407945143359",
  appId: "1:407945143359:web:48ef910c020b678da8848a",
  measurementId: "G-W4N3517PGH"
};




  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const authen = firebase.auth();

  export { db, authen}; 
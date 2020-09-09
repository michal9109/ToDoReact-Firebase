import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "todos-679df.firebaseapp.com",
  databaseURL: "https://todos-679df.firebaseio.com",
  projectId: "todos-679df",
  storageBucket: "todos-679df.appspot.com",
  messagingSenderId: "34338313027",
  appId: "1:34338313027:web:597f5036df1cc4324d15f6",
  measurementId: "G-8QXDWRNWTQ",
});

const db = firebaseApp.firestore();

export default db;

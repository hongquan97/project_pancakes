import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAY1DoC5gseBDI-dg4DknZU3Qlf0V_0994",
    authDomain: "projectpancakes-9a9f8.firebaseapp.com",
    databaseURL: "https://projectpancakes-9a9f8.firebaseio.com",
    projectId: "projectpancakes-9a9f8",
    storageBucket: "projectpancakes-9a9f8.appspot.com",
    messagingSenderId: "52136730901",
    appId: "1:52136730901:web:f537248675504d22fb491c",
    measurementId: "G-KZ5KQCV5XL"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
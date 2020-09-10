import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWAkClwYcetYubt0VtT1n7iOhW1gzI98U",
  authDomain: "rayzik-messenger.firebaseapp.com",
  databaseURL: "https://rayzik-messenger.firebaseio.com",
  projectId: "rayzik-messenger",
  storageBucket: "rayzik-messenger.appspot.com",
  messagingSenderId: "1095350238363",
  appId: "1:1095350238363:web:7d0a69f95b1e64b258da3e"
});

const db = firebase.firestore();

export default db;
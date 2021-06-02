import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBl8td35fQTXR9KGchwZJosTxXjW_IPsWI",
  authDomain: "alphab-310e2.firebaseapp.com",
  databaseURL:
    "https://alphab-310e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "alphab-310e2",
  storageBucket: "alphab-310e2.appspot.com",
  messagingSenderId: "464247728191",
  appId: "1:464247728191:web:a63f84bd2c93ae7b32b08a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

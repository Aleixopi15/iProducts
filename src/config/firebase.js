// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDyTJTpfjRLjcV7kQ81hPXCAfprnJKDRog",
  authDomain: "iproducts-7e134.firebaseapp.com",
  projectId: "iproducts-7e134",
  storageBucket: "iproducts-7e134.appspot.com",
  messagingSenderId: "366389025905",
  appId: "1:366389025905:web:5622aa01f2c27d70384fd0",
  measurementId: "G-J72S4MZ82X"
};

firebase.initializeApp(firebaseConfig);

export default firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// apiKey: "AIzaSyC1nQJwYk2O3jmw7KVDC_-ODn04OcLXpVI",
//   authDomain: "e-warehouse-client.firebaseapp.com",
//   projectId: "e-warehouse-client",
//   storageBucket: "e-warehouse-client.appspot.com",
//   messagingSenderId: "245796065878",
//   appId: "1:245796065878:web:b190b1d2ee79ca409c21f7",

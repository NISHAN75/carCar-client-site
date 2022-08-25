import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const useAuth =()=>{

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeYfQ5-EUeZi1xaZSaC5mKgz6esxgQbWY",
    authDomain: "carcare-149ae.firebaseapp.com",
    projectId: "carcare-149ae",
    storageBucket: "carcare-149ae.appspot.com",
    messagingSenderId: "648049186478",
    appId: "1:648049186478:web:3a7159b6347d4834bc7f3f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
return[auth];
}

export default useAuth;
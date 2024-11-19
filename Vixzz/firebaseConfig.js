import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyAQHjlydhuGNrZ6gnEjrwqnXjSKSeFgnF0",
    authDomain: "vixz-8e1f0.firebaseapp.com",
    projectId: "vixz-8e1f0",
    storageBucket: "vixz-8e1f0.appspot.com",
    messagingSenderId: "47813877594",
    appId: "1:47813877594:web:17bceeed2672e7ba459d63",
    measurementId: "G-H2M75KC5ZD"
};


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const db = getFirestore(app);
  

export { auth, db }
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

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
const auth = getAuth(app)

export { auth }
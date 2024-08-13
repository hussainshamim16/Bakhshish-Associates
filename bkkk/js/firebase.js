// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore,collection, addDoc,doc, setDoc  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth,createUserWithEmailAndPassword,  signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkgAapImc873xqrJfj1kYF1puKNlO5c1U",
    authDomain: "simple-data-hs.firebaseapp.com",
    projectId: "simple-data-hs",
    storageBucket: "simple-data-hs.appspot.com",
    messagingSenderId: "1098204691885",
    appId: "1:1098204691885:web:8c2e01d363c6ab2a423524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

export{
    getFirestore,
    collection, 
    addDoc,
    doc, 
    setDoc,
    db,
    app,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
}
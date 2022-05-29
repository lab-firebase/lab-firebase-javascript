// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {collection, getDocs, getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJTJ644-pcXu8wt6diVVoAp63E7_w3CV8",
    authDomain: "lab-firebase-47c29.firebaseapp.com",
    projectId: "lab-firebase-47c29",
    storageBucket: "lab-firebase-47c29.appspot.com",
    messagingSenderId: "297701167656",
    appId: "1:297701167656:web:53ab3ebd9c0cdc24a91b1d",
    measurementId: "G-KD81R2X87Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
const db = getFirestore(app);

async function getCities() {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol)
    const cityList = citySnapshot.docs.map((doc) => {
        doc.data();
    });
    console.log(cityList);
}

getCities();


onAuthStateChanged(auth, (user) => {
    if(user != null) {
        console.log("Loged in")
    } else {
        console.log("No user")
    }
});
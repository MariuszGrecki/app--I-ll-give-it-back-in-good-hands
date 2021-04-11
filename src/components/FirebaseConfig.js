import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAHrSRi12e425PFqzVaK7wg7bJKV93mV4U",
    authDomain: "give-2502d.firebaseapp.com",
    projectId: "give-2502d",
    storageBucket: "give-2502d.appspot.com",
    messagingSenderId: "275333950197",
    appId: "1:275333950197:web:e0903d57333ba5632133bc"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}
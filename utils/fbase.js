import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDv5JCeMbTHgpolWd68jQkYsQ77wPjzSAo",
    authDomain: "next-mdio-perso.firebaseapp.com",
    databaseURL: "https://next-mdio-perso.firebaseio.com",
    projectId: "next-mdio-perso",
    storageBucket: "next-mdio-perso.appspot.com",
    messagingSenderId: "744884716030",
    appId: "1:744884716030:web:4e02a846ba7bb630de80af",
    measurementId: "G-NBB8KG3BSF"
}


const fBaseApp = firebase.initializeApp(config);
export const DB = fBaseApp.firestore();
export const messagesCollection = DB.collection('messages');
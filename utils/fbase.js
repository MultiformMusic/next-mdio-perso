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

let fBaseApp;

try {

    fBaseApp = firebase.initializeApp(config);
    
} catch (error) {
    
}
export const DB = fBaseApp === undefined ? undefined : fBaseApp.firestore();
export const messagesCollection =  DB === undefined ? undefined : DB.collection('messages');
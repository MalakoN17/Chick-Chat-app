import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// const firebase = firebase;

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaDkIsvbyX0Xa20qri4s9pCQPhM2ItDbk",
    authDomain: "chickchat-834ff.firebaseapp.com",
    projectId: "chickchat-834ff",
    storageBucket: "chickchat-834ff.appspot.com",
    messagingSenderId: "258875177542",
    appId: "1:258875177542:web:388c007f89b33121b5a847"
})
console.log(firebaseApp.firestore().collection('massages').get());
const dataBase = firebaseApp.firestore()

const auth = firebase.auth()

export {dataBase, auth}
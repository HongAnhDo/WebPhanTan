import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDh4TZfI591XdR9hG28bV1otVS-aI4N0uI",
    authDomain: "phantan-8efe2.firebaseapp.com",
    databaseURL: "https://phantan-8efe2.firebaseio.com",
    projectId: "phantan-8efe2",
    storageBucket: "phantan-8efe2.appspot.com",
    messagingSenderId: "112732913389"   
     
};
export default firebase.initializeApp(firebaseConfig);
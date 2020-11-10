//Initialize WOW.JS
new WOW().init();   

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD2rGCkLKWWd10-7TsYl5PP36TKaLFQZP0",
    authDomain: "coder-js-8795.firebaseapp.com",
    databaseURL: "https://coder-js-8795.firebaseio.com",
    projectId: "coder-js-8795",
    storageBucket: "coder-js-8795.appspot.com",
    messagingSenderId: "838639654874",
    appId: "1:838639654874:web:c7120d506de934e7a592e3",
    measurementId: "G-4G2HR28T67"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()
var authFirestore = firebase.auth();


const firebaseConfig = {
  apiKey: "AIzaSyBgHXt7zPjmF_tHTkhMJbyjbsbG1P8oxRc",
  authDomain: "coffee-mana.firebaseapp.com",
  projectId: "coffee-mana",
  storageBucket: "coffee-mana.firebasestorage.app",
  messagingSenderId: "610702102756",
  appId: "1:610702102756:web:9fc3c32621e283ef015cf1",
  measurementId: "G-EMNEKP775V"
};
// init
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var auth = firebase.auth();

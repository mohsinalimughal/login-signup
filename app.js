
import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { Auth } from "./firebase.js";





onAuthStateChanged(Auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    
    // ...
  } else {
    window.location = 'login.html'
    // User is signed out
    // ...
  }
});
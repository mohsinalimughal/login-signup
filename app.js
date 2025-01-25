
import {  onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { Auth } from "./firebase.js";


const logout = document.querySelector("#form")


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



logout.addEventListener("submit",(event)=>{
event.preventDefault()



signOut(Auth).then(() => {
  window.location = "login.html"
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log(error)
});

})


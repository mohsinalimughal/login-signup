import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { Auth } from "./firebase.js";


const email = document.querySelector("#email")
const password = document.querySelector("#password")
const form= document.querySelector("#form")


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(Auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        window.location = "index.html"
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });


    console.log(email.value)
    console.log(password.value)
})




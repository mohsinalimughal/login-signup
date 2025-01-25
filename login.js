import {  signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { Auth} from "./firebase.js";

const Provider = new GoogleAuthProvider();

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


const google = document.querySelector("#google")


google.addEventListener("click",()=>{
  console.log("google clickedk")

  signInWithPopup(Auth, Provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Google Sign-In error:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    // ...
  });

})



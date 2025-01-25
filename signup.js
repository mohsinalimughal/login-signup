import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { Auth } from "./firebase.js";




const email = document.querySelector("#email")
const password = document.querySelector("#password")
const form= document.querySelector("#form")


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log('ok');
    
    createUserWithEmailAndPassword(Auth,email.value,password.value)
         .then(()=>{
             console.log(email.value)
             console.log(password.value)
         })
         .catch((error)=>{
            const errorMessege = error.messege;
            console.log(errorMessege)
            
         })

})

<script>
import Fa from 'fa-svelte'
import Register from './Register.svelte'
import {db} from "../firebase.js"
import { auth } from '../firebase.js'
import { authState } from 'rxfire/auth'
import { faCheckCircle  } from '@fortawesome/free-solid-svg-icons' 
import { loggedin } from '../store.js'

let user;
let logInMail;
let logInPassword;

const unsubscribe = authState(auth).subscribe(u => user = u)

$:console.log($loggedin)
let showLogout = false;
$: $loggedin = user ? true : false

const  loginUser = (e) => {
    console.log(e)
    auth.signInWithEmailAndPassword(logInMail, logInPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
};
        
const toggleLogout = () => {
    showLogout = !showLogout
};

$:console.log(user)

  
</script>

<section class="container" style="border-top:1px solid black">
    <div class="inner inner1300">
        <div class="util_sign">
            <form class="signIn_container" on:submit|preventDefault={(e) => loginUser(e)} >
                <h2 style="text-transform:uppercase; font-family:'Josefin Sans'">Sign in</h2>
                 <div for="email">
                    <input class="_input" type="text" name="email" placeholder="* Email" bind:value={logInMail} required/>
                </div>
                <div for="_password">
                    <input class="_input" type="password" name="password" placeholder="* Password (5 characters minimum" bind:value={logInPassword} required/>
                </div>
                <div class="signInBtn">
                    <input class="_input" type="submit" value="SIGN UP" />
                </div>
            </form>
            <div class="register_container" >
                <Register/>
            </div>
        </div>
    </div>
</section>

<style>
*{
    box-sizing: border-box;
}
.container{
    width:100vw;
}
.util_sign{
    display: flex;
}
.inner{
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.util_sign>.signIn_container{
    width: 50%;
}
.util_sign>.register_container{
    width: 50%;
}
.register_container{
    margin-top: 30px;
    padding-left: 9%;
    border-left:1px solid black 
} 
.signIn_container{
    margin-top: 30px;
    padding-right: 5%;
}
._input{
    width: 100%;
    height: 2.7rem;
    margin-top: 2%;
    padding-left: 10px;
    border: 1px solid rgba(51, 50, 50, 0.822);
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
}

.signInBtn > input{
    background-color: black;
    color: white;
    height: 2.7rem;
    width: 100%;
}

@media screen and (max-width: 1200px) {
.signIn_container{
    padding-left: 15%;
    }
._input, .signInBtn > input{
    width: 70vw;
}
.util_sign {
    flex-direction: column;
  }
.register_container {
    border: 0 solid !important;
    padding-left:15%;
  }
}

</style>
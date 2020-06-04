<script>
import Fa from 'fa-svelte'
import { faCheckCircle  } from '@fortawesome/free-solid-svg-icons' 
import { db } from "../firebase.js";
import { auth } from "../firebase.js"
import { authState } from "rxfire/auth"


let first_name = "";
let last_name = "";
let gender = "";
let email = "";
let password = "";

const createUser = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        displayName = first_name;
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    const users = db.collection("users")
	    users.doc(email).set({
		first_name: first_name,
        last_name: last_name,
        gender: gender,
        email: email,
        password: password,
    });
        first_name = "";
        last_name = "";
        gender = "";
        email = "";
        password = "";
};

</script>

<div class="new-account">
    <div>
        <h2 style="text-transform:uppercase;">Create an account</h2>
    </div>
    
    <form id="form" on:submit|preventDefault={createUser}>
        <div class="notice">
            <p>* Required field</p>
        </div>
        
        <div class="gender_area">    
            
            <div class="gender_select" style="padding-right:0.5rem">
                <input type="radio" id="_female"  name="gender" value="Female" bind:group={gender} checked required>
                <label for="_female" style="display:flex;">
                    <span>
                        <Fa icon={faCheckCircle}></Fa>
                        female
                    </span>
                </label>
            </div>
            
            <div class="gender_select">
                <input type="radio" id="_male" name="gender" value="Male" bind:group={gender} required>
                <label for="_male" style="display:flex;">
                    <span>
                        <Fa icon={faCheckCircle}></Fa>
                        Male
                    </span>
                </label>
            </div>

        </div>

        <div class="new">
            <div for="_firstname">
                <input class="_input" bind:value={first_name} type="text" placeholder="* First name" required />
            </div>
            <div for="_lastname">
                <input class="_input" bind:value={last_name} type="text" placeholder="* Last name" required />
            <div>
            <div for="email">
                <input class="_input"  bind:value={email} type="text" placeholder="* Email" required />
            </div>
            <div for="_password">
                <input class="_input" bind:value={password} type="password" placeholder="* Password (5 characters minimum" required />
            </div>
            <div class="signInBtn">
                <input class="_input"  type="submit" value="SIGN UP" />
            </div>
            <div class="termsAndPrivacy" style="width:100%;">
                <p>By clicking here. I agree to the Privacy Policy and Terms and Conditions provided by Wishtrend.</p>
            </div>
        </div>
    </form>
</div>


<style>

.notice > p{
    font-size:13px; 
    display: flex;
    justify-content: flex-end;
    padding-bottom:5px;
}

.gender_area{
  display:flex;
}

.gender_select input[type="radio"] {
  opacity: 0;
  width: 0;
  position: absolute;
}

.gender_select label {
    border: 1px solid rgba(51, 50, 50, 0.822);
    color: rgba(128, 128, 128, 0.541);
    font-size: 13px;
    width: 18.9vw;
    height: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    justify-content: center;
    cursor: pointer;
}

.gender_select span{
    padding-top: 13px;
}

.gender_select input[type="radio"]:checked + label {
    border: 2px solid black;
    color:black;
}

._input{
    box-sizing: border-box;
    width: 38.9vw;
    height: 2.7rem;
    margin-top: 2%;
    padding-left: 3%;
    border: 1px solid rgba(51, 50, 50, 0.822);

    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
}


.signInBtn > input{
    background-color: black;
    color: white;
}

input:-webkit-autofill{
    background-color: rgb(232, 240, 254) !important;
    -webkit-box-shadow-: 0 0 0 60px rgb(232, 240, 254) inset !important;
}

.termsAndPrivacy > p {
    font-weight:400; 
    font-size:15px;
    padding-top: 7px;
}

@media screen and (max-width: 1200px) {
    .new-account{
        width: 70vw;
    }
    ._input{
        width: 70vw;
    }
    .gender_select label{
        width: 33.9vw;
        padding-bottom: 2%;
    }

}
</style>

  
 <!-- //Her registreres nye kunder på siden. Denne skal senere kunne brukes for login.
  /* const newUser = db.collection("users");
  let gender = "";
  let first_name = "";
  let last_name = "";
  let email = "";
  let password = "";

  const addUser = () => {
    newUser.doc(email).set({
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      email: email,
      password: password,
    });

    first_name = "";
    last_name = "";
    gender = "";
    email = "";
    password = "";
  }; */
  -->
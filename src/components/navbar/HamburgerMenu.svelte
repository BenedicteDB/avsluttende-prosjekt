<script>
import { loggedin } from '../../store.js'
export let get 
export let openSignIn
export let openSearchResults

let searchFieldValue = ''
let visible = false


const logout = () => {
    auth.signOut()
};

const openNav = () => {
    document.getElementById("mySidebar").style.width = "75%";
    visible = true
}

const closeNav = (field, value) => {
    document.getElementById("mySidebar").style.width = "0";
    visible = false
    get(field, value)
}

const closeSidebar = () => {
  document.getElementById("mySidebar").style.width = "0";
}




</script>

<div id="mySidebar" class="sidebar">
    <div class="topBar">
      {#if $loggedin} 
	      <div class="signIn" on:click={logout}>Sign Out |</div> 
	   {:else} 
        <div class="signIn" on:click={openSignIn} on:click={closeSidebar}>Sign In |</div>
      {/if} 
      <div class="closebtn" on:click={closeSidebar}>x</div>
    </div>
    <div>
      <form on:submit|preventDefault={()=>openSearchResults(searchFieldValue)} on:submit|preventDefault={closeSidebar}>
          <input type="Search" bind:value={searchFieldValue} placeholder="Search">
      </form>
    </div>
    <div class="column">
        <h3>Skincare</h3>
        <div class="link" on:click={()=>closeNav("category", "Cleanser")}>Cleanser</div>
        <div class="link" on:click={()=>closeNav("category", "Exfoliater")}>Exfoliater</div>
        <div class="link" on:click={()=>closeNav("category", "Toner")}>Toner</div>
        <div class="link" on:click={()=>closeNav("category", "Serum")}>Serum</div>
        <div class="link" on:click={()=>closeNav("category", "Moisturizer")}>Moisturizer</div>
        <div class="link" on:click={()=>closeNav("category", "Mask")}>Mask</div>
        <div class="link" on:click={()=>closeNav("category", "SPF")}>SPF</div>
    </div>
    <div class="column">
        <h3>Routines</h3>
        <div class="link" on:click={()=>closeNav("category", "Gifts & Sets")}>Gifts & Sets</div>
        <div class="link" on:click={()=>closeNav("category", "Wish Recipe")}>Wish Recipe</div>
        <div class="link" on:click={()=>closeNav("category", "Wish, Try, Love")}>Wish, Try, Love</div>
        <div class="link" on:click={()=>closeNav("category", "Brand Package")}>Brand Package</div>
            
        <div class="column">
            <h3>Tools</h3>
            <div class="link" on:click={()=>closeNav("category", "Beauty")}>Beauty</div>
        </div>
    </div>
    <div class="column">
        <h3>Brand</h3>
        <div class="link" on:click={()=>closeNav("brand", "Klairs")}>Klairs</div>
        <div class="link" on:click={()=>closeNav("brand", "By Wishtrend")}>By Wishtrend</div>
        <div class="link" on:click={()=>closeNav("brand", "Jungle Botanics")}>Jungle Botanics</div>
        <div class="link" on:click={()=>closeNav("brand", "I'm From")}>I'M FROM</div>
        <div class="link" on:click={()=>closeNav("brand", "Cosrx")}>COSRX</div>
        <div class="link" on:click={()=>closeNav("brand", "Skin&LAB")}>Skin & LAB</div>
        <div class="link" on:click={()=>closeNav("brand", "Eclair")}>ECLAIR</div>
    </div>
</div>

<div id="main">
  <button class="openbtn" on:click={openNav}>☰</button>  
</div>

<style>
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-transform: uppercase;
}


h3{
  color:black;
  border-bottom:2.2px solid black;
  margin-left:10px;
  padding-top:5px;
  padding-bottom:5px;
  width:90%;
  font-weight: 600;

}

.sidebar .link {
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  color: black;
  display: block;
  border-bottom:1px solid black;
  width:90%;
  margin-left:10px;
  padding-top:10px;
  padding-bottom:10px;
  cursor: pointer;
}

.sidebar .topBar {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  background-color:black;
  display:flex; 
  justify-content:space-between;
}
.sidebar .signIn{
  padding-left: 10px;
  padding-top: 15px;
  color:white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
}

.sidebar .closebtn{
  font-size: 21px;
  font-weight: 200;
  color:rgba(255, 255, 255, 0.726);
  float: right;
  padding-right: 10px;
  padding-top: 15px;
  cursor: pointer;

}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  color: black;
  padding: 10px 15px;
  border: none;
}

input{
  width: 90%;
  border-bottom: 1px solid black;
  margin-left: 10px;
  padding-bottom: 8px;
  padding-top: 20px;
}

::placeholder{
  color: black;
  font-size: 13px;
}
</style>
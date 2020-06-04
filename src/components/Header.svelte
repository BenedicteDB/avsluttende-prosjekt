<script>
import HamburgerMenu from '../components/navbar/HamburgerMenu.svelte'
import Fa from 'fa-svelte'
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons' 
import { faHeart } from '@fortawesome/free-regular-svg-icons' 

import { loggedin } from '../store.js'
import { auth } from '../firebase.js'

export let get
export let openSearchResults
export let openSignIn

export let home

let searchFieldValue = ''


const logout = () => {
    auth.signOut()
};
</script>

<section class="header">

    <div class="shipping">
        <p>Free standard shipping $60 </p>
        <p style="padding-left:5px;" class="hideHeader">| Fast delivery $150</p>
     </div>

    <div class="navbar-top">

        <div class="left">
            <div class="hide">
                <HamburgerMenu get={get} openSearchResults={openSearchResults} openSignIn={openSignIn}/>
            </div>
            <form on:submit|preventDefault={()=>openSearchResults(searchFieldValue)}>
                <input type="Search" bind:value={searchFieldValue} placeholder="Search">
            </form>
        </div>

        <div class="logo middle">
            <img width="100%" on:click={home} src="https://image.wishtrend.com/images/logo.jpg" alt="">
        </div>

        <div class="right">
        {#if $loggedin}
	        <p class="hideHeader" on:click={logout}>Sign Out |</p>
	    {:else}
            <p class="hideHeader" on:click={openSignIn}>Sign In |</p>
        {/if}

            <!-- <Fa icon={faHeart} />
            <Fa icon={faShoppingBag} /> -->
        </div>
    </div>

</section>

<style>
    .navbar-top{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-top: 0.5rem;
    }

    .shipping{
        justify-content: center;
        display: flex;
        background-color: black;
        color: white;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
  
    .right, .left{
        display: flex;
    }

    .middle{
        justify-self: center;
        
    }

    .middle>img{
        cursor: pointer;
    }

    .right{
        justify-self: end;
        padding-right: 0.5rem;
    }
    .right>p{
        cursor: pointer;
    }

    .left input{
        border-bottom: 1px solid black;
        margin-left: 1rem;
        background: url(../images/searchIcon.png)
    }

    .hide{
        display: none;
    }

    @media screen and (max-width: 700px){
        input{
            display: none;
        }
        .hide{
            display: block;
        }
        .hideHeader{
            display: none;
        }
        .header{
            border-bottom: 1px solid black;
            padding-bottom: 5px;
        }
    }
</style>
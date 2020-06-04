<script>
	import {db} from "./firebase.js"
	import Home from './components/Home.svelte'
	import Footer from './components/Footer.svelte'
	import SignIn from './components/SignIn.svelte'
	import Header from './components/Header.svelte'
	import Products from './components/Products.svelte'
	import SideNavbar from './components/navbar/SideNavbar.svelte'
	import DropdownMenu from './components//navbar/DropdownMenu.svelte'
	import HamburgerMenu from './components/navbar/HamburgerMenu.svelte'
	import ProductDescription from './components/product-info/ProductDescription.svelte'

	let homeToggle = true
	let productsToggle = false
	let productDescriptionToggle = false
	let signInToggle = false
	let searchResultsToggle = false
	let productsObj = []
	let searchResults = []

	
	const dbQuery = (field, value) => {
  		productsObj = []
  		db.collection('products').where(field, '==', value)
    		.get()
    		.then(function(querySnapshot){
      		querySnapshot.forEach(function(doc){
        	productsObj.push(doc.data())
        	productsToggle = true
      		})
    	})
	}
	
	const searchQuery = async (searchFieldValue) => {
		let temp = []
		productsObj = []
		const search = await db.collection('products').get()
		temp = search.docs.map(doc => doc.data())
		temp.map(objects => {
			/* console.log(objects.brand.includes(searchFieldValue)) */
			if(objects.brand.includes(searchFieldValue) 
				|| objects.name.includes(searchFieldValue) 
				|| objects.brand.includes(searchFieldValue)){
				productsObj.push(objects)
			}else{
				console.log("no match") 
			}
		});
		searchResultsToggle = true
	}

	const reset = () => {
	  homeToggle = false
	  productsToggle = false
	  productDescriptionToggle = false
	  signInToggle = false
	  searchResultsToggle = false
	}

	const getProducts = (field, value) => {
		reset()
  		dbQuery(field, value)
	}

	let clickedProduct
	
	const openProductDescription = (product) => {
    	reset()
    	productDescriptionToggle = true
    	clickedProduct = product
	}

	const openSignIn = () => {
    	reset()
    	signInToggle = true
    
	}
	
	const openSearchResults = (searchFieldValue) => {
		reset()
		searchQuery(searchFieldValue)
	}
	const home = () => {
		reset()
		console.log(1)
		homeToggle = true
	}
</script>

<main>
	
  	<Header 
	  openSignIn={openSignIn}
	  openSearchResults={openSearchResults}
	  home={home} 
	  get={getProducts}
	/>
	<div class="hide">
		<DropdownMenu get={getProducts}/>
	</div>
  {#if homeToggle}
    <Home/>
  {/if}
  {#if searchResultsToggle}
	<Products productsObj={productsObj} openProductDescription={openProductDescription} />
  {/if}
  {#if productsToggle}
    <div style="display:flex">
		<div class="hide">
     		<SideNavbar get={getProducts}/>
		</div>
      	<Products productsObj={productsObj} openProductDescription={openProductDescription} />
    </div>
  {/if}
	{#if productDescriptionToggle}
    <ProductDescription clickedProduct={clickedProduct}/>
  {/if}
 {#if signInToggle}
    <SignIn/>
  {/if}

  <Footer/>

</main>


<style>

@media screen and (max-width: 700px){
	.hide{
		display: none;
	}
	
}

</style>
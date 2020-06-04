<script>
    import {db} from "../../firebase.js"
    import Fa from 'fa-svelte'
    import { faHeart as faHeartFull  } from '@fortawesome/free-solid-svg-icons' 
    import { faHeart } from '@fortawesome/free-regular-svg-icons' 
    import DetailsImage from './DetailsImage.svelte'
    import MoreInfo from './MoreInfo.svelte'
    import Reviews from './Reviews.svelte'
    import YourReviews from './YourReviews.svelte'
    
    export let clickedProduct
    
    let productID
    let reviews = []
    $:console.log(reviews)
    
    scroll(0,0)
    //her finner jeg id til produktet mitt collection products i firebase
    const query = db.collection('products').where('name', '==', `${clickedProduct.name}`)
        .get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
            productID = doc.id
            });
        //Jeg gjør dette for å hente ut data fra subcollection til products sin ID. 
        //Dette gjøres sånn at kunder av nettbutikken kan legge inn reviews til det gitte produktet
         db.collection("products").doc(productID).collection("reviews").get()
                .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                reviews = reviews.concat(doc.data())
            });
        });  
    })

</script>

<section class="container">
    <div class="inner">
        <div class="img_container">
            <img src="{clickedProduct.image_link}" alt="">
        </div>
        <div class="product-info">
            <div class="basic-info" >
                <p class="top" style="text-transform:uppercase; font-size:14px; font-weight:700">{clickedProduct.brand}</p>
                <p class="top" style="font-size:22px; font-weight:500;">{clickedProduct.name}</p>
                <p class="bottom" style="color:#0076cf; font-size:15px; font-weight:500; line-height: 1.4">{clickedProduct.description}</p>
                <p class="bottom" style="font-size:22px">${clickedProduct.price}.00</p>
                <div class="buttons">
                    <div class="btn">Add to cart</div>
                    <div class="btn2">
                        <Fa icon={faHeart}></Fa>
                        <p>Wishlist</p>
                    </div>
                </div>
            </div>
            <MoreInfo clickedProduct={clickedProduct}/>
        </div>
    </div>
</section>

<div class="review-container">
    <Reviews productID = {productID}/>
    <YourReviews reviews={reviews}/>
</div>
<style>
.container{
    overflow: scroll;
    letter-spacing: 1px;
    width: 100vw;   
}

.review-container{
    margin-left: 6%;
    margin-right:6%
} 
.inner{
    border-bottom: 1px solid black;
    margin: 6%;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
}

.img_container{
    margin-right:1rem;
}

img{
    max-width: 100%;
}

.basic-info{
    line-height: 1.7;
    width: 95%;
    border-bottom: 1px solid black;        
}

.buttons{
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    padding-bottom: 15px;       
}



.btn{
    background-color: black;
    color: white;
    text-align: center;
    width: 70%;
    line-height: 2.3;
    margin-right: 15px;
}
.btn2{
    border: 1px solid black;
    color: black;
    display: flex;
    width: 27%;
    justify-content: space-around;
    align-items: center
}

 @media screen and (max-width: 800px){
    .inner{
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }
    img{
        align-self: center;
    }
    .basic-info{
        text-align: center;
    }

   
 
    
}  

</style>
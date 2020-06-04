<script>
    export let productsObj
    export let openProductDescription

    
</script>

<section>
    <div class="breadcrumb">
        <p>SHOP > SKINCARE > {productsObj[0].category || productsObj[0].brand || productsObj[0].name}</p>
    </div>
    <div class="product_container">
        {#each productsObj as prod}
            <article style="cursor: pointer;" on:click={()=>openProductDescription(prod)} class="product-list">
                <div>
                    <div class="card">
                        <img width="100%" height="auto" src="{prod.image_link}" alt="" class="img_back">
                        <img width="100%" height="auto" src="{prod.image_link_two}" alt="" class="img-top">
                    </div>
                    <div>
                        <p class="brand">{prod.brand}</p>
                        <p class="name" >{prod.name}</p>
                        <p class="price">${prod.price}.00</p>
                    </div>
                </div>
            </article>
        {/each}    
    </div>

</section>


<style>
section {
    width: 100vw;  
}
.product_container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 90%;
    overflow: hidden;
    margin-left: 2.9rem;
    margin-bottom: 5rem;
}
.breadcrumb{
    margin: 1.5rem 0rem 2rem 3rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid black;
    width: 93%;
}

.breadcrumb>p{
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 900;
}

.brand, .name, .price {
    text-align: center;
    margin: 0;
    padding: 2px;
}

.brand{ 
    text-transform: uppercase;
    font-weight:800; 
    font-size:0.7rem;
}

.name{
    font-weight:400;
    font-size:0.8rem;
}

.price{
    font-weight:500; 
    font-size:0.9rem;
}

/* Shows image another image on hover */
.card {
    position: relative;
    display: inline-block;
}
.card .img-top {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.card:hover .img-top {
    display: inline;

}

@media screen and (max-width: 1200px){
    .product_container{
        display: grid;
        grid-template-columns: repeat(3, 1fr)
    }
    
}
@media screen and (max-width: 900px){
    .product_container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
    } 
}
@media screen and (max-width: 700px){
    .product_container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        margin: 0;
    }
    .breadcrumb{
        margin-left: 10px;
    }
    .breadcrumb>p{
        font-size: 0.9rem;
        text-align: center
    }
}
</style>
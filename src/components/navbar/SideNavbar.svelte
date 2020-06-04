<script>
export let get

</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

<div class="sidenav">
    <div class="title">Shop</div>
   <!--  <div class="products toplinks" style="margin-bottom:15px">New Arrivals</div>
    <div class="products toplinks">Best Sellers</div> -->
  <div class="title">Skincare</div>
  <div class="container-links">
 <!--  -->   <div>
       <p on:click={()=>get("category", "Cleanser")} class="category products left">Cleanser</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Exfoliater")} class="category products left">Exfoliater</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Toner")} class="category products left">Toner</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Serum")} class="category products left">Serum</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Moisturizer")} class="category products left">Moisturizer</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Mask")} class="category products left">Mask</p>
    </div>
    <div>
      <p on:click={()=>get("category", "SPF")} class="category products left">SPF</p>
    </div>
  </div>
  <div class="title">Routines</div>
  <div class="container-links">
    <div>
       <p on:click={()=>get("category", "Gifts & Sets")} class="category products left">Gifts & Sets</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Wish Recipe")} class="category products left">Wish Recipe</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Wish, Try, Love")} class="category products left">WTL</p>
    </div>
    <div>
      <p on:click={()=>get("category", "Brand Package")} class="category products left">Brand Package</p>
    </div>
  </div>
</div>
   

<style>


.sidenav {
    margin-left: 1.2rem;
    width: 10rem;
    padding-top: 1.2rem;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
}

.title{
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid black;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
}
/* .toplinks{
    padding-bottom: 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    border-bottom:1px solid grey;
    text-transform: uppercase;
}
 */
.products{
    cursor: pointer;
}

.container-links{
    border-bottom: 1px solid grey;
    padding-bottom: 0.5rem;
}

/* This is to get a text underline transition to match the length of the different links */
.category{
    font-size: .8rem;
    font-weight: 400;
    line-height: 0.2;
}
.category.left{
    position: relative;
    width:auto;
    display: inline-block
}

.category.left:before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    top: 6.5px;
    background-color: black;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}

.category.left:hover:before {
    visibility: visible;
    width: 100%;
}
</style>

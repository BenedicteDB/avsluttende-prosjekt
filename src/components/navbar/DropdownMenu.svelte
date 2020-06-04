<script>
  export let get
</script>

<div class="dropdown-container">

    
    <div class="dropdown">
        <button class="dropbtn">SHOP</button>
        <div class="dropdown-content">  
            <div class="row">
              <!--   <div class="column">
                    <h3 style="padding-bottom:10px">New Arrivals</h3>
                    <h3 >Best Sellers</h3>
                </div> -->
                <div class="column">
                    <h3>Skin care</h3>
                    <div class="link" on:click={()=>get("category", "Cleanser")}>Cleanser</div>
                    <div class="link" on:click={()=>get("category", "Exfoliater")}>Exfoliater</div>
                    <div class="link" on:click={()=>get("category", "Toner")}>Toner</div>
                    <div class="link" on:click={()=>get("category", "Serum")}>Serum</div>
                    <div class="link" on:click={()=>get("category", "Moisturizer")}>Moisturizer</div>
                    <div class="link" on:click={()=>get("category", "Mask")}>Mask</div>
                    <div class="link" on:click={()=>get("category", "SPF")}>SPF</div>
                </div>

                <div class="column">
                    <h3>Routines</h3>
                    <div class="link" on:click={()=>get("category", "Gifts & Sets")}>Gifts & Sets</div>
                    <div class="link" on:click={()=>get("category", "Wish Recipe")}>Wish Recipe</div>
                    <div class="link" on:click={()=>get("category", "Wish, Try, Love")}>Wish, Try, Love</div>
                    <div class="link" on:click={()=>get("category", "Brand Package")}>Brand Package</div>
            
                    <div class="column">
                        <h3>Tools</h3>
                        <div class="link" on:click={()=>get("category", "Beauty")}>Beauty</div>
                    </div>
                </div>

                <div class="column img_container">
                    <img width="100%" src="https://image.wishtrend.com/wp-content/uploads/2019/11/01.shop_-1.jpg" alt="">
                    <p>KLAIRS | Daily Skin Hydrating Water</p>
                </div>
                <div class="column img_container">
                    <img width="100%" src="https://image.wishtrend.com/wp-content/uploads/2019/11/07.editorial_2-1.jpg" alt="">
                    <p>Will Be Your Next Obsession</p>
                </div>
            </div>
        </div>
    </div> 

    <div class="dropdown">
        <button class="dropbtn">ROUTINES</button>
        <div class="dropdown-content">  
            <div class="row">
                <div class="column">
                    <h3>Routines</h3>
                    <div class="link" on:click={()=>get("category", "Gifts & Sets")}>Gifts & Sets</div>
                    <div class="link" on:click={()=>get("category", "Wish Recipe")}>Wish Recipe</div>
                    <div class="link" on:click={()=>get("category", "Wish, Try, Love")}>Wish, Try, Love</div>
                    <div class="link" on:click={()=>get("category", "Brand Package")}>Brand Package</div>
                </div>

                <div class="column img_container">
                    <img width="100%" src="https://image.wishtrend.com/wp-content/uploads/2019/12/02.routines_1.jpg" alt="">
                    <p>2 step fundamental line set</p>
                </div>
                <div class="column img_container">
                    <img width="100%" src="https://image.wishtrend.com/wp-content/uploads/2019/12/03.routines_2.jpg" alt="">
                    <p>Skin Detox Package</p>
                </div>
            </div>
        </div>
    </div> 

    <div class="dropdown">
        <button class="dropbtn">BRAND</button>
        <div class="dropdown-content">  
            <div class="row">
                <div class="column">
                    <h3>Brand</h3>
                    <div class="link" on:click={()=>get("brand", "Klairs")}>Klairs</div>
                    <div class="link" on:click={()=>get("brand", "By Wishtrend")}>By Wishtrend</div>
                    <div class="link" on:click={()=>get("brand", "Jungle Botanics")}>Jungle Botanics</div>
                    <div class="link" on:click={()=>get("brand", "I'm From")}>I'M FROM</div>
                    <div class="link" on:click={()=>get("brand", "Cosrx")}>COSRX</div>
                    <div class="link" on:click={()=>get("brand", "Skin&LAB")}>Skin & LAB</div>
                    <div class="link" on:click={()=>get("brand", "Eclair")}>ECLAIR</div>
                </div>
                <div class="column img_container">
                    <img width="100%" src="https://image.wishtrend.com/wp-content/uploads/2019/11/04.brand_1-1.jpg" alt="">
                    <p>NEW! LED Therapy Mask</p>
                </div>
                <div class="column img_container">
                    <img width="100%" src="https://image.wishtrend.com/wp-content/uploads/2019/11/05.brand_2-1.jpg" alt="">
                    <p>KLAIRS | Fundamental Eye Awakening Gel</p>
                </div>
            </div>
        </div>
    </div>

</div>



<style>

.dropdown-container {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
} 

.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button*/
.dropbtn {
  font-size: 0.8rem;
  font-weight: 900;
  padding: 0.4rem 2rem;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display:none;
  position: absolute;
  background-color: white;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 2;
}

/* Show dropdown menu hover */
.dropdown:hover .dropdown-content {
  display: block;
}

.row{
  margin: 0 auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  justify-content: center;
  display: flex; 
}

.column {
  margin-top: 2%;
  margin-bottom: 2%;
  width: 13%;
  float: left;
}

.column h3{
    font-size: 70%;
    letter-spacing: .1%;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 0.5%;
    cursor: pointer;
}

/* Style links */
.column .link {
    font-size: 0.8rem;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 1;
    padding: 0.2rem;
    cursor: pointer;
}

.column .link:hover {
  text-decoration: underline;
}

.img_container{
  width: 23%;
  padding-left: 2rem;
}

.img_container p{
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
}

</style>
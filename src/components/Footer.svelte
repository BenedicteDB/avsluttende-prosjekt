<script>
import Fa from 'fa-svelte'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons' 
</script>
<div class="footer">
 <div class="item item3">
        <div class="social">
            <div class="footer_title">
                <p>SOCIAL</p>
            </div>
            <div class="footer-icons">
                <div>
                    <img class="s-image" src="https://image.wishtrend.com/assets/images/layout/ico_facebook.svg" alt="">
                </div>
                <div>
                    <img class="s-image" src="https://image.wishtrend.com/assets/images/layout/ico_pinterest.svg" alt="">
                </div>
                <div>
                    <img class="s-image" src="https://image.wishtrend.com/assets/images/layout/ico_instagram4.svg" alt="">
                </div>
                <div>
                    <img class="s-image" src="https://image.wishtrend.com/assets/images/layout/ico_twitter.svg" alt="">
                </div>
                <div>
                    <img class="s-image" src="https://image.wishtrend.com/assets/images/layout/ico_youtube.svg" alt="">
                </div>
            </div>
        </div>
    </div> 
    <div class="item item2">
        <div class="ft_menu">
            <div class="list">
                <div>
                    <p>About Us</p>
                    <p>FAQ</p>
                    <p>Shipping & Handling</p>
                    <p>Return & Refunds</p>
                    <p>Track Order</p>
                 </div>
            </div>
                 
            <div class="list">
                <div>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Affiliates Program</p>
                    <p>Our Stores</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
    <div class="item item1">
        <div class="footer_left">
            <div class="footer_logo">
                <img width="60%" src="https://image.wishtrend.com/images/layout/footer_logo.png" alt="">
                <div style="font-size:0.6rem"class="copyrigth">© 2019 Wishtrend.com. All Rights Reserved.</div>
            </div>
        </div>
    </div>
</div>


<style>

 .footer {
    padding-top:1rem;
    padding-bottom: 1rem;
    display: grid;
    color: white;
    background-color: black;
    grid-template-columns: repeat(3, 1fr);
 }

.item{
    margin:3%;
}

.footer_title{
    font-size: 12px;
}

.footer_title>p{
    padding-bottom: 1rem;
}

.footer_left{
    padding-left:6rem;
    width: 50%;
}
.list>div{
    font-size: 0.7rem;
    float: left;
    padding-left: 4rem;
}

.list p{
    padding-top: 1rem;
}
 
.footer-icons div{
	display: inline-block;
    width: 2.3rem;
    padding-right: 0.3rem;
	cursor: pointer;
	margin-bottom: 5px;
}

.social{
    padding-left:14%;
}

@media screen and (max-width: 850px){
    .footer{
        display: flex;
        flex-direction: column;
        justify-content: flex-start
    }
     .list>div{
        padding-left: 4rem;
        float: left;
    }
    .social{
        padding-left: 3.8rem;
    }
    .footer_left{
        padding-left: 4rem;
        
    }
    .footer_logo img{
        width: 60%
    }
}
</style>


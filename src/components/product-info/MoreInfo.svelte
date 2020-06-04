<script>
export let clickedProduct
import DetailsImage from './DetailsImage.svelte'

import Fa from 'fa-svelte'
import { faPlus  } from '@fortawesome/free-solid-svg-icons' 
import { faMinus  } from '@fortawesome/free-solid-svg-icons' 

let isDetailOpen = false
let isHowtoOpen = true
let isIngrOpen = true 

$: classDetail = (isDetailOpen ? 'hideInfo': '')
$: classHowto = (isHowtoOpen ? 'hideInfo': '')
$: classIngr = (isIngrOpen ? 'hideInfo': '')


const showTxt = (e) => {
    let target = e.target.id
    showList()
    switch(target){
        case 'dts' :
            isDetailOpen = !isDetailOpen
            isHowtoOpen = true
            isIngrOpen = true
            break;
        case 'htu':
            isHowtoOpen = !isHowtoOpen
            isDetailOpen = true
            isIngrOpen = true
            break;
        default:
            isIngrOpen = !isIngrOpen
            isDetailOpen = true
            isHowtoOpen = true
    }
}

let howToList = []
$: list = howToList

const showList = () => {
    howToList = clickedProduct.how_to_use.split('. ')

    return clickedProduct.how_to_use.split('. ')
}
</script>

<div class="add-info" >
        
        <div class="hideText">
            <div class="tab-container" id="dts" on:click={showTxt}>
                <h5>DETAILS</h5>
                <div class="icon_container">
                    {#if isDetailOpen}
                        <Fa icon={faPlus}></Fa>
                    {:else}
                        <Fa icon={faMinus}></Fa>
                    {/if}
                </div>
            </div>
            <div class={classDetail}>
                <DetailsImage/>
                <p>{clickedProduct.details}</p>
            </div>
        </div>
        <div class="hideText">
            <div class="tab-container" id="htu" on:click={showTxt}>
                <h5>HOW TO USE</h5>
                <div class="icon_container">
                    {#if isHowtoOpen}
                        <Fa icon={faPlus}></Fa>
                    {:else}
                        <Fa icon={faMinus}></Fa>
                    {/if}
                </div>
            </div>
            <div class={classHowto}>
                {#each list as i}
                    <p>{i}</p>
                {/each}
            </div>
        </div>
        <div class="hideText">
            <div class="tab-container" id="ingr" on:click={showTxt}>
                <h5>INGREDIENTS</h5>
                <div class="icon_container" >
                    {#if isIngrOpen}
                        <Fa icon={faPlus}></Fa>
                    {:else}
                        <Fa icon={faMinus}></Fa>
                    {/if}
                </div>
            </div>
            <div class={classIngr}>
                <p>{clickedProduct.ingredients}</p>
            </div>
        </div> 
</div>


<style>

.add-info{
    width: 95%
}
.add-info .hideText{
    border-bottom: 1px solid black;     
}

.icon_container{
    font-size: 10px;
    height: 20px;
    padding-top: 20px;
    padding-right: 20px;
    pointer-events: none
}

.add-info p{
    margin:15px 0px;
    padding: 0;
    width: 90%;
    line-height: 1.6;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 600;
}

.hideInfo{
    display: none
}

.tab-container{
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
</style>
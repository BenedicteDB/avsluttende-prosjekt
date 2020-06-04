<script>
  export let reviews
  console.log(reviews)
</script>

<!-- Her hentes det ut data fra subcollection reviews, 
den oppdateres ikke av seg selv, så man er nødt til å 
refreshe siden -->
<div style="margin-bottom:2rem;">
<div style="border-bottom:1px solid black; margin-bottom:1rem;"></div>
    <h2>Customer reviews</h2>
{#each reviews as review}

		<div class="reviews">
			<div class="info">
                <h5>name</h5>
                <p>{review.name}</p>
				<h5>skin type</h5>
				<p>{review.skintype}</p>
				<h5>age</h5>
				<p>{review.age}</p>
			</div>
			<div class="tekst">
                <p class="title">{review.title}</p>
				<p>{review.content}</p>
			</div>
		</div>

   
{:else}
     <div>ingenting her</div>
{/each}
</div>

<style>
    .reviews{
        display: grid;
        grid-template-columns: 1fr 5fr;
        border-top: 1px solid black;
        border-bottom: 1px solid black;

    }

    h5{
        text-transform: uppercase;
        font-size: 12px;
    }

    .info{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .info p{
        align-self: center
    }

    .tekst{
        padding-top: 1.2rem;
        padding-left: 1rem;
    }
    .tekst p{
        margin-bottom: .5rem;
        font-size: 14px;
    }
    .title{
        font-weight: 700;
    }

</style>
<script lang="ts">
	import ProductCard from "$lib/productCard.svelte";

	const products: Product[] = [
		{
			id: "price_1NOOEcC892MWjQYTq8NPgJn3",
			name: "Coffee",
			price: 5
		},
		{
			id: "price_1NOOFGC892MWjQYTrpYXD0za",
			name: "Sun Glasses",
			price: 10
		},
		{
			id: "price_1NOOFgC892MWjQYTS3k7uSOJ",
			name: "Water Bottle",
			price: 15
		}
	]

	// async function checkout(){
	// 	await fetch("api/stripeCheckout"),
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// }

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>Svelte Kit 1.0 Store</h1>
		</div>
		{#each products as product}
			<ProductCard product={product} />	
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary">Checkout with Stripe API</button>
		</div>
	</div>
</div>

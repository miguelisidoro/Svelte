<script language="ts">
	import ProductCard from '../lib/productCard.svelte';
	import autoPreprocess from 'svelte-preprocess';
 	import typescript from '@rollup/plugin-typescript';

	const products : Product[] = [
		{
			id: "price_1McfalGEQ8u28rQ5BZ8bAlqT",
			name: "Coffee",
			price: 5
		},
		{
			id: "price_1McfbuGEQ8u28rQ5mEO9kZeB",
			name: "Sunglasses",
			price: 10
		},
		{
			id: "price_1McfcaGEQ8u28rQ56pMnyDz1",
			name: "Water Bottle",
			price: 15
		}
	]
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>Svelte Kit Store 1.0</h1>
		</div>
		{#each products as product}
			<ProductCard />
		{/each}

		<!-- <ProductCard /> -->
		<div class="col-span-3">
			<button class="btn variant-filled-primary">Checkout with Stripe API</button>
		</div>
	</div>
</div>

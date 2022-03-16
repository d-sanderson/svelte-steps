<script>
	import ProductCard from '../components/ProductCard.svelte';
	export let pokemons;
</script>

<div>
	<main>
		{#each pokemons as pokemon}
			<ProductCard
				title={pokemon.name}
				author={pokemon.url}
				avatar="http://placekitten.com/200/300"
			/>
		{/each}
	</main>
</div>

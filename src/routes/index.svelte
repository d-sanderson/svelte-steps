<script>
	import ProductCard from '../components/ProductCard.svelte';
	export let users;
</script>

<div>
	<main>
		{#each users as { avatar, lastName, bird }}
			<a href={`/${lastName}`} class="box">
				<ProductCard author={lastName} title={bird} avatar={avatar} />
			</a>
		{/each}
	</main>
</div>

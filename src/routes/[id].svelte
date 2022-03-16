<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api');

		if (res.ok) return { props: { users: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import { page } from '$app/stores';
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

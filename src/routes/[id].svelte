<script>
	import { page } from '$app/stores';
	import ProductCard from '../components/ProductCard.svelte';
</script>

<div>
	<ProductCard author="David" title={$page.params.id} />
</div>

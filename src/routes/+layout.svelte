<script>
	import Navigation from '$lib/components/navigation.svelte';
</script>

<main>
	<div class="inner">
		<Navigation />
		<slot />
		<footer />
	</div>
</main>

<style>
	main {
		background: url('/tile.png') repeat 0 0,
			linear-gradient(
				180deg,
				rgba(27, 27, 27, 0.2) 0%,
				#1b1b1b calc(100vw / 16 * 8.5),
				#1b1b1b 100%
			);
		min-height: 100vh;
	}
	main .inner {
		width: 1200px;
		max-width: calc(100% - 100px);
		margin: 0 auto;
		padding-top: 50px;
	}
</style>

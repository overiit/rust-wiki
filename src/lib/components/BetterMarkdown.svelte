<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { parseMarkdown } from '$lib/util/markdown';

	/** @type {string} */
	export let source;

	$: parsed = parseMarkdown(source);
</script>

{#each parsed as line}
	{#if line.type === 'markdown'}
		<SvelteMarkdown source={line.content} />
	{:else if line.type === 'youtube'}
		<iframe
			width="560"
			height="315"
			src={`https://www.youtube.com/embed/${line.content}`}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	{/if}
{/each}

<style>
	h1 {
		color: red;
	}
</style>

<script>
	import { page } from '$app/stores';
	import BetterMarkdown from '$lib/components/BetterMarkdown.svelte';
	import pages from '../../../../generated/pages.json';

	$: params = $page.params;
	$: content = getPageByParams(params.path, params.page);
	$: title = content
		? [...content]
				.reverse()
				.map((page) => page.title)
				.join(' - ') + ' - Rust Wiki'
		: '404 Not Found';

	function getPageByParams(path, page) {
		if (path) {
			const category = pages.find((category) => category.path === path);
			if (category) {
				if (page) {
					const sub = category.pages?.find((sub) => sub.path === page);
					if (sub) {
						return [category, sub];
					}
				} else {
					return [category];
				}
			}
		}
		return null;
	}
</script>

<svelte:head>
	<title>
		{title}
	</title>
</svelte:head>

<BetterMarkdown source={content?.[content.length - 1].content ?? '# 404 Not Found'} />

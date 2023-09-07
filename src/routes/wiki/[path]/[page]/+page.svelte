<script>
	import { page } from '$app/stores';
	import BetterMarkdown from '$lib/components/BetterMarkdown.svelte';
	import pages from '../../../../generated/pages.json';

	$: params = $page.params;
	$: content = getPageByParams(params.path, params.page);

	function getPageByParams(path, page) {
		if (path) {
			const category = pages.find((category) => category.path === path);
			if (category) {
				if (page) {
					const sub = category.pages?.find((sub) => sub.path === page);
					if (sub) {
						return sub.content;
					}
				} else {
					return category.content;
				}
			}
		}
		return null;
	}
</script>

<BetterMarkdown source={content ?? '# 404 Not Found'} />

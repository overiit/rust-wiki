<script>
	import { page } from '$app/stores';
	import pages from '../../generated/pages.json';

	$: params = $page.params;

	$: url = new URL($page.url);
	$: hash = decodeURIComponent(url.hash.substring(1));
	$: activePath = pages.find((category) => category.path === params.path);
	$: activePage = activePath?.pages?.find((sub) => sub.path === params.page);
</script>

<div class="path">
	<a href="/wiki/">wiki</a>
	{#if activePath}
		{' / '}<a href="/wiki/{activePath.path}">{activePath.title}</a>
	{/if}
	{#if activePath && activePage}
		{' / '}<a href="/wiki/{activePath.path}/{activePage.path}">{activePage.title}</a>
	{/if}
</div>

<div class="content">
	<!-- Todo: maybe make this fully dynamic and allow infinite nesting. idk -->
	<aside>
		{#each pages as category}
			<a href="/wiki/{category.path}" class="category" class:active={category.path === params.path}>
				<div class="image">
					<img src="/icons/{category.path}.svg" alt={category.title} />
				</div>
				<div class="name">
					{category.title}
				</div>
			</a>
			{#if category.path === params.path && category.pages && category.pages.length > 0}
				<div class="subs">
					{#each category.pages as sub}
						<a
							href="/wiki/{category.path}/{sub.path}"
							class="sub-category"
							class:active={category.path === params.path && sub.path === params.page}
						>
							{sub.title}
						</a>

						{#if sub.path === params.page && sub.sections && sub.sections.length > 0}
							<div class="small-subs">
								{#each sub.sections as section}
									<a
										href="/wiki/{category.path}/{sub.path}#{section
											.toLowerCase()
											.replace('.', '')
											.replace(/[\W_]+/g, '-')}"
										class="sub-category"
										class:active={hash ===
											section
												.toLowerCase()
												.replace('.', '')
												.replace(/[\W_]+/g, '-')}
									>
										{section}
									</a>
								{/each}
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		{/each}
	</aside>

	<section id="main">
		<slot />
	</section>
</div>

<style>
	.path {
		text-transform: uppercase;
		font-size: 0.75rem;
		font-weight: 700;
		color: #e4dad180;
		margin-bottom: 0.5rem;
	}

	.path a {
		color: #e4dad1;
		text-decoration: none;
	}

	.content {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: flex-start;

		padding: 2rem;

		background-color: rgba(0, 0, 0, 0.15);
	}

	/* make it stick to the top */
	/* dont grow vertically */
	aside {
		align-self: flex-start;
		width: 250px;
		top: 0;
		position: -webkit-sticky;
		position: sticky;

		user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
	}

	section {
		flex: 1;
	}

	.category {
		display: flex;
		align-items: center;
		gap: 1rem;

		padding: 0.5rem 1rem;

		color: #e4dad180;
		text-decoration: none;
	}

	.category:hover,
	.category.active {
		color: #e4dad1;
	}

	.category .image {
		width: 2rem;
		height: 2rem;
	}

	.category .image img {
		width: 100%;
		height: 100%;
	}

	.category .name {
		font-size: 1rem;
		font-weight: 700;
	}

	.subs {
		display: flex;
		flex-flow: column;
		margin-left: 2rem;
		border-left: 2px solid rgba(255, 255, 255, 0.5);
		padding-left: 2rem;
	}
	.small-subs {
		display: flex;
		flex-flow: column;
		margin-left: 1rem;
	}

	.sub-category {
		text-decoration: none;
		color: #e4dad180;
		font-size: 0.75rem;
		padding: 0.15rem 0;
		margin: 0.1rem 0;
	}

	.sub-category:hover,
	.sub-category.active {
		color: #e4dad1;
	}
</style>

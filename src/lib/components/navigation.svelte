<nav>
	<a href="/" class="brand">
		<div class="logo">
			<img src="/rust_logo.png" alt="" />
		</div>
		<div class="name">FARM GUIDE</div>
	</a>
	<div class="menu">
		<a href="https://github.com/" target="_blank" class="github">
			<img src="/icons/github.svg" alt="" />
		</a>
	</div>
</nav>
<div class="notice">* NOT AFFILIATED WITH FACEPUNCH OR RUST</div>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav .brand {
		display: flex;
		gap: 0.5rem;
		align-items: center;

		text-decoration: none;
	}
	nav .brand .logo {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
	}
	nav .brand .logo img {
		max-height: 100%;
		max-width: 100%;
	}
	nav .brand .name {
		font-family: 'Bebas Neue', cursive;
		font-size: 70px;
		line-height: 50px;
		transform: translateY(4px);
		color: #e4dad1;
	}
	nav .menu {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	nav .menu .github {
		display: block;
		height: 40px;
		width: 40px;
	}

	nav .menu .github img {
		max-height: 100%;
		max-width: 100%;
	}

	.notice {
		font-size: 13px;
		font-family: 'Bebas Neue', cursive;
		margin-top: 5px;
		letter-spacing: 0.5px;
		margin-bottom: 4rem;
	}
</style>

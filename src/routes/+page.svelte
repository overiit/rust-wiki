<div class="headline">
	FARM<br />
	SELL<br />
	THRIVE
</div>

<p>
	The only aim in Rust is to farm. Everything wants you to die - the island’s wildlife and other
	inhabitants, the environment, other survivors. Do whatever it takes to last another night.
</p>

<div class="buttons">
	<a href="/wiki/">
		<button class="primary">GET STARTED</button>
	</a>
	<a href="https://store.steampowered.com/app/252490/Rust/" target="_blank">
		<button>BUY RUST</button>
	</a>
</div>

<style>
	.headline {
		font-family: 'Bebas Neue', cursive;
		font-size: 12rem;
		line-height: 10rem;
		transform: translateY(4px);
	}

	p {
		width: 550px;
		max-width: 100%;
		color: #e4dad180;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		padding-bottom: 50px;
	}

	button {
		padding: 0.5rem 0.7rem;
		font-family: 'Bebas Neue', cursive;
		font-size: 1.5rem;
		background-color: #1d1d1d;
		color: white;
		cursor: pointer;
		border: 2px solid rgba(255, 255, 255, 0.2);
		box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
	}
	button:hover,
	button:active {
		border: 2px solid #cd412b;
		color: #cd412b;
		transition: border 0.2s ease-in-out, color 50ms ease-in-out, box-shadow 50ms ease-in-out,
			transform 0.1s ease-in-out;
	}
	button:active {
		transform: translate(4px, 4px);
		box-shadow: none;
	}
	button.primary {
		border-color: transparent;
		background-color: #cd412b;
	}
	button.primary:hover,
	button.primary:active {
		background-color: #e4dad1;
		color: #cd412b;
	}
</style>

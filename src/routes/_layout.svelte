<script lang="ts">
	import Nav from "../components/Nav.svelte";

	import DiNpm from "svelte-icons/di/DiNpm.svelte";
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'

	import '../global.css';

	export let segment: string;
</script>

<header>
	<a href="/">
		<h1>Tyrann IO</h1>
	</a>

	<p>Typed collections of HTTP APIs.</p>

	<div style="width: 1rem" />
	<a href="https://www.npmjs.com/package/tyrann-io" class="icon npm">
		<DiNpm />
	</a>

	<a href="https://github.com/wopal-dev/tyrann-io" class="icon github">
		<DiGithubBadge />
	</a>
</header>

<Nav {segment} />

<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		align-items: flex-end;
		padding: 0.5rem 2rem;
		color: white;
		background-color: #333333;
	}

	header h1 {
		margin: 0 0 0 0;
	}

	header a {
		text-decoration: none;
	}

	header p {
		margin: 0 0 0.25rem 1rem;
		color: "#666666";
	}

	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.icon {
		color: white;
		width: 28px;
    height: 28px;
		margin: 0.15rem 0.5rem;
		transition: color 0.3s ease;
	}

	.npm {
		color: #cb3837;
	}

	.npm:hover {
		color: #c96d6d;
	}

	.github {
		color: rgb(240, 246, 252);
	}

	.github:hover {
		color: white;
	}
</style>

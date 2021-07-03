<script>
	import Highlight from "svelte-highlight";
	import bash from "svelte-highlight/src/languages/bash";
	import typescript from "svelte-highlight/src/languages/typescript";
	import github from "svelte-highlight/src/styles/github-dark";
	import "../blog.css";

	$: code1 = `import { tyrann } from 'tyrann-io';
import * as t from 'io-ts';

const apis = tyrann({
	'/user/{id}': {
		get: {
			path: t.type({
				id: t.number,
			}),
			response: {
				200: t.type({
					name: t.string,
					address: t.string,
				}),
			},
		}
	},
});
`;

	$: code2 = `{
	name: string;
	address: string;
}`;

	$: install = `yarn add tyrann-io
# OR
npm i tyrann-io`;
</script>

<svelte:head>
	<title>Tyrann IO - Home</title>
	{@html github}
</svelte:head>

<a href="https://bundlephobia.com/package/tyrann-io@0.6.1">
	<img
		width="144"
		height="20"
		alt="bundle size"
		src="https://img.shields.io/bundlephobia/minzip/tyrann-io"
	/>
</a>

<a href="https://www.typescriptlang.org/">
	<img
		width="108"
		height="20"
		alt="TypeScript"
		src="https://img.shields.io/npm/types/tyrann-io"
	/>
</a>

<h2>Introduction</h2>

<h3>Overview</h3>

<p>
	Tyrann is a TypeScript HTTP API mananger. It enables us to define HTTP APIs in
	the following fashion. 🎉
</p>

<Highlight language={typescript} code={code1} />

<p>
	To explain a little, the above code defines an API <code>{`/user/{id}`}</code
	>. It takes an <code>{`id: number`}</code> as input, and should returns with an
	object in the following shape:
</p>

<Highlight language={typescript} code={code2} />

<h3>Why Tyrann IO</h3>

<p>
	Tyrann IO is useful when we are not allowed to automatically generate a
	fully-typed HTTP client. A typed HTTP client is useful because a simple <code
		>{`JSON.parse(response) as UserResponse`}</code
	> doesn't check the type of response, which lets landmine into your typing. We
	do have ways to automatically generate a correctly typed HTTP client, such as gRPC,
	OpenAPI tools and GraphQL. However, sometimes the tech-stack of the serverside
	doesn't support sound type definition, so we have to handcode the client by ourselves.
</p>

<p>In reality, these problems happen:</p>

<ol>
	<li>The HTTP server doesn't generate the client (in TypeScript).</li>
	<li>We don't have the backend API specs.</li>
	<li>
		Simple methods like <code>{`JSON.parse(response) as UserResponse`}</code> does
		not guarantee runtime type safety. The server can update or change, or error,
		making unchecked data into the system, leading to hard-to-trace problems.
	</li>
</ol>

<p>
	Our developers have tested <code>{`tyrann-io`}</code> in production for a few projects, proving its usefulness.
	The typed client created with <code>{`tyrann-io`}</code> proves to be a vigilant sentinel to avoid error propagating in our app. 
</p>

<h2>Installation</h2>

<Highlight language={bash} code={install} />

<h2>Documentation</h2>

<h3>User Guide</h3>

<p>
	Please refer to <a href="https://github.com/wopal-dev/tyrann-io#user-guide"
		>README.md#user-guide</a
	>
</p>

<h3>API Reference</h3>

<p>
	Please refer to <a
		href="https://github.com/wopal-dev/tyrann-io#api-definition"
		>README.md#api-definition</a
	>
</p>

<h2>Source Code</h2>

<p>
	The code lives on GitHub <a href="https://github.com/wopal-dev/tyrann-io"
		>wopal-dev/tyrann-io</a
	>. Issues and contributions are welcome! 👋
</p>

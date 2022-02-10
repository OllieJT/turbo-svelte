<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	export const prerender = true;

	export const load: Load = async function () {
		return {
			props: {},
		};
	};
</script>

<script lang="ts">
	import Meta from "svelte-seo";
	import { handleTitle } from "$util/handle-meta";
	import Prose from "$components/container/Prose.svelte";
	import Wrapper from "$components/container/Wrapper.svelte";
</script>

<Meta
	title={handleTitle("We help small businesses connect with their audience.")}
	description="We help small businesses connect with their audience."
	openGraph={{
		type: "website",
		title: "Inqling, a creative studio",
		description: "We help small businesses connect with their audience.",
	}}
/>

<Wrapper constrain gutter>
	<Prose>
		<h1>Hello World</h1>
	</Prose>
</Wrapper>

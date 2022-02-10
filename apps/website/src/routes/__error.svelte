<script context="module" lang="ts">
	import type { ErrorLoad } from "@sveltejs/kit";

	export const load: ErrorLoad = async function ({ error, status }) {
		return {
			props: { status, error },
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import Prose from "$components/container/Prose.svelte";

	export let status: number;
	export let error: Error;
	console.error(error.stack);
</script>

<Wrapper constrain gutter>
	<Prose>
		<h1>Error {status}</h1>
		<p>
			{error.message}
		</p>
	</Prose>
</Wrapper>

<Wrapper constrain gutter>
	<slot />
</Wrapper>

<script lang="ts">
	import type { ICON } from "$types/core";

	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	export let style: "default" | "highlight" = "default";
	export let icon: ICON | undefined = undefined;
</script>

<button
	on:click={(e) => dispatch("click", e)}
	class:action-text-default={style === "default"}
	class:action-text-highlight={style === "highlight"}
	class="group shrink-0 grow-0 rounded-full md:px-5 md:py-4"
>
	<slot />
	<svelte:component
		this={icon}
		class="mt-[-1px] block translate-x-1 transition-transform ease-out group-hover:translate-x-0"
	/>
</button>

<style lang="postcss">
	button :global(svg) {
		height: 1.5em;
	}
</style>

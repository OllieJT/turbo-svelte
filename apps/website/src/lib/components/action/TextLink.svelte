<script lang="ts">
	import type { ICON } from "$types/core";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	export let href: string;
	export let external: boolean = false;
	export let style: "default" | "highlight" = "default";
	export let icon: ICON | undefined = undefined;
</script>

<style lang="postcss">
	a :global(svg) {
		height: 1em;
	}
</style>

<a
	on:click={(e) => dispatch("click", e)}
	{href}
	class:action-text-default={style === "default"}
	class:action-text-highlight={style === "highlight"}
	class="group action-text-default shrink-0 grow-0 rounded-full md:px-5 md:py-4"
	target={external ? "_blank" : undefined}
	rel={external ? "noreferrer noopener" : undefined}
>
	<slot />
	<svelte:component
		this={icon}
		class="mt-[-1px] block translate-x-1 transition-transform ease-out group-hover:translate-x-0"
	/>
</a>

<script lang="ts">
	import { fade, scale } from "svelte/transition";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	export let active: boolean;
</script>

{#if active}
	<div
		transition:fade={{ delay: 0, duration: 200 }}
		class="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  px-2 pt-20 pb-6 backdrop-blur-sm"
	>
		<div
			transition:scale={{ delay: 150, duration: 250 }}
			class="pointer-events-auto relative z-20 m-auto overflow-hidden rounded-xl"
		>
			<slot />
		</div>
		<button
			class="pointer-events-auto absolute inset-0 z-10 block h-full w-full bg-purple-900/90 transition-colors duration-500 ease-in-out hover:bg-purple-900/70"
			on:click={(e) => dispatch("close", e)}
			aria-label="Close Modal"
		/>
	</div>
{/if}

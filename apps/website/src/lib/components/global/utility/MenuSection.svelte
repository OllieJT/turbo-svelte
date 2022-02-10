<script lang="ts">
	export let title: string;
	export let description: string | undefined = undefined;
	export let constrain: boolean = false;
</script>

<section class="flex flex-col items-stretch gap-3">
	<div class="px-8">
		<h5 class="text-base font-semibold leading-relaxed text-zinc-600">{title}</h5>
		{#if description}<p class="mt-1 text-base text-zinc-500">
				{description}
			</p>{/if}
	</div>
	<div class:px-8={constrain} class="flex flex-col items-stretch gap-4">
		<slot />
	</div>
</section>

<style lang="postcss"></style>

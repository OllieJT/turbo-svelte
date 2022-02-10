<script lang="ts">
	import type { SELECT_OPTION } from "$types";

	export let value: string;
	export let options: SELECT_OPTION[];
	export let id: string | undefined = undefined;
</script>

<select
	{id}
	class="
		form-select outling-none min-h-interactive hocus:border-purple-500 hocus:ring-purple-500 block w-full cursor-pointer rounded-lg border-2 border-zinc-200 text-zinc-600 ring-0 ring-transparent hover:text-purple-800
	"
	bind:value
>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>

<style lang="postcss"></style>

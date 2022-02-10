<script lang="ts">
	export let value: string;
	export let label: string;
	export let type: "text" | "email" | "url" = "text";
	export let id: string;
	export let placeholder: string | undefined = undefined;
	export let name: string = id;
	export let optional: boolean = false;
</script>

<label class="flex grow flex-col items-stretch" for={id}>
	<span class="py-2 text-sm font-semibold text-purple-800"
		>{label}{#if optional}<span class="ml-2 font-normal opacity-80">(Optional)</span
			>{/if}</span
	>
	{#if type === "url"}
		<input
			{id}
			{name}
			type="url"
			bind:value
			class="input-text"
			{placeholder}
			required={!optional}
		/>
	{:else if type === "email"}
		<input
			{id}
			{name}
			type="email"
			bind:value
			class="input-text"
			{placeholder}
			required={!optional}
		/>
	{:else}
		<input
			{id}
			{name}
			type="text"
			bind:value
			class="input-text"
			{placeholder}
			required={!optional}
		/>
	{/if}
</label>

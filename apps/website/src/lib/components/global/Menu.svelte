<script lang="ts">
	import { ArrowRight } from "@inqling/svelte-icons";
	import Masthead from "./utility/Masthead.svelte";
	import { page } from "$app/stores";
	import { allRoutes } from "$util/href-paths";
	import Logo from "$components/common/Logo.svelte";
	import Modal from "./utility/Modal.svelte";
	import { uiState } from "$store/ui-state";
	import Prose from "$components/container/Prose.svelte";

	$: currentPath = $page.url.pathname;
</script>

<Masthead />
<Logo />

<ul>
	{#each allRoutes as link}
		{@const isActive = currentPath === link.href}
		<li>
			<a
				href={link.href}
				class:active={isActive}
				class="group serif-content flex flex-row items-center justify-between overflow-x-hidden rounded-xl px-8 py-3 text-2xl leading-none text-zinc-500 hover:bg-purple-50 hover:text-purple-600 active:text-purple-600"
			>
				<span>{link.label}</span>
				<span class:active={isActive} class="opacity-0 active:opacity-100"
					><ArrowRight /></span
				>
			</a>
		</li>
	{/each}
</ul>

<Modal active={$uiState.modal === "example"} on:close={uiState.modal.close}>
	<Prose>
		<h2>Examle Modal</h2>
	</Prose>
</Modal>

<script lang="ts">
	import Logo from "$components/common/Logo.svelte";
</script>

<a
	href="/"
	class="group flex flex-row items-center gap-2 rounded-xl text-3xl hover:bg-purple-50 {$$props?.class}"
>
	<Logo />
	<span
		class="serif-content text-lg leading-none text-purple-900 group-hover:text-purple-700"
	>
		Inqling
	</span>
</a>

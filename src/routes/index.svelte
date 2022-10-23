<script>
	import HelloSection from '../layout/HelloSection.svelte';
	import WeDoFor from '../layout/WeDoFor.svelte';
</script>

<svelte:head>
	<title>ITingo</title>
</svelte:head>



<section class="items-center hello bg-lightYellow w-full">
	<h1 class="w-8/12 text-center text-7xl text-white font-black">WELCOME TO THE HOME OF IT VOLUNTEERING</h1>
</section>

<section>
	<HelloSection />
</section>

<WeDoFor />

<section class="bg-lightYellow clients w-full">

</section>









<style>
	.hello {
		height: 300px;
	}

	.clients {
		height: 100vh;

	}
</style>


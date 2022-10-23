<script>
	import HelloSection from '../layout/HelloSection.svelte';

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

<div class="justify-center" style="margin-bottom: -150px;">
<div class="text-center flex max-w-2xl flex-col bg-viol shadow-md text-gray-500 dark:text-gray-400 rounded-lg  p-8 text-center">
  <h5 class="mb-2 text-3xl font-bold text-white">Wspieramy wsperajiencych</h5>
  <p class="mb-5 text-base text-white sm:text-lg dark:text-gray-400">
    Vollie is an online marketplace that connects skilled people to non-profits, charities and social enterprises for skills-based online volunteering. Vollie projects are exclusively online, meaning that people can donate their skills and experience from anywhere in the world, and around their busy personal and professional schedule. Sign up today and start changing the world!
  </p>
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
		<ButtonGroup>
			<Button outline size="lg" color="yellow">For Startups</Button>
			<Button outline  size="lg" color="yellow">For Volunteers</Button>
			<Button outline size="lg" color="yellow">For NGO`s</Button>
			<Button outline ="lg" color="yellow">For business</Button>
		</ButtonGroup>
  </div>
</div>
</div>

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


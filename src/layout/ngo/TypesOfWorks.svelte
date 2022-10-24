<script>
    import { Button } from 'flowbite-svelte';

	export let typeWork;
</script>

<section style="background-position: {typeWork.align == 'start' ? 'right': 'left'}; background-image: url({typeWork.bgImage});" class="our-family justify-{typeWork.align} content-center pr-20" id="family">
	<div style="" class="lg:w-7/12 md:w-12/12 sm:w-12/12 bg-white flex justify-end items-center">
		<div style="min-width: 320px;" class="flex flex-col items-center">
			<h2 class=" m-8  text-6xl text-lightYellow font-bold ">{typeWork.title}</h2>
			<!-- <Button size="xl" class="w-10/12" color="purple">Czytać więcej</Button> -->
		</div>
	</div>
</section>


<style>
    .our-family {
		min-height: 100vh;
		height: auto;
		background-repeat: no-repeat;		
		background-size: auto;
		background-attachment: fixed;
	}
</style>
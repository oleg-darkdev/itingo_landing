<script>
    import { Button } from 'flowbite-svelte';
</script>


<section class="our-family justify-start content-center pr-20" id="family">
	<div style="" class="lg:w-5/12 md:w-12/12 sm:w-12/12 bg-white flex justify-end items-center">
		<div style="min-width: 320px;" class="flex flex-col items-center">
			<h2 class=" m-8  text-6xl text-lightYellow font-bold ">NASZA <br> NON-PROFIT <br> RODZINA</h2>
			<Button size="xl" class="w-10/12" color="purple">Czytać więcej</Button>
		</div>
	</div>
</section>


<style>
    .our-family {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/bg/family-bg.svg);
		background-repeat: no-repeat;
		background-position: 75% 25% ;
		background-size: auto;
		background-attachment: fixed;
	}
</style>
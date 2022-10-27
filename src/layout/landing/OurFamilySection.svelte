<script>
    import { Button } from 'flowbite-svelte';
</script>


<section class="our-family justify-start content-center pr-20" id="family">
	<div style="" class="text-wrap lg:w-5/12 md:w-12/12 sm:w-12/12  flex justify-end items-center">
		<div style="min-width: 320px;" class="pt-6 pb-12 text-block max-w-max flex flex-col items-center rounded-xl">
			<h2 class=" m-8  text-6xl text-lightYellow font-bold ">NASZA <br> NON-PROFIT <br> RODZINA</h2>
			<Button href="/family" size="xl" class="w-10/12" color="purple">Czytać więcej</Button>
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


	@media (min-width: 1024px) {
		.text-wrap {
			background-color: #fff;
		}


	}

	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.text-wrap {
			background-color: none;
		}
		.text-block {
			background-color: #fff;
			width: 100%;
		}
	}
</style>
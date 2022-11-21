<script>
    import { Button } from 'flowbite-svelte';
	import offertsData from '../../data/landing/offertsData/offerts';	
	import ClientBenefitsList from '../../components/landing/main/ClientBenefitsList.svelte';
</script>

<section class="mt-20 mb-20 w-full flex flex-col ">
	{#each offertsData as offerData }
	<div class="lg:m-2 md:m-2 flex p-2 {offerData.reverse ? 'flex-row-reverse': 'flex-row'}  w-full flex-wrap justify-center content-center">
		<div style="" class="text-wrap lg:w-4/12 md:w-12/12 w-12/12  flex justify-center items-center bg-white">
			<div style="min-width: 320px;" class="pt-6 lg:pb-12 md:pb-12 pb-2 text-block max-w-sm  flex flex-col items-start  rounded-xl">
				<h2 class=" lg:text-5xl md:text-5xl text-4xl mb-2 text-violDark  font-black">{offerData.title[0]}  <br> {offerData.title[1]}  <br> {offerData.title[2]}</h2>
					<p class="font-normal text-violDark leading-tight">
						{offerData.description}
					</p>
					<ClientBenefitsList client={offerData.benefitsText}/>
				<Button href={offerData.link} size="xl" class="lg:mt-8 md:mt-8 lg:w-10/12 w-full" color="purple">Czytać więcej</Button>
			</div>
		</div>

		<div style="max-width: 900px;" class="flex flex-row flex-wrap p-2 rounded-lg  bg-violDark w-full flex-wrap justify-center content-center">
			{#each offerData.offerList as offer}
				<a class="hover:bg-lightYellow rounded-lg m-2 p-1" href={offerData.link + '#' + offer.anchor}>
					<img alt={offer.title} src={'/images' + offerData.link + '/benefits/mini/' + offer.miniImg} class="text-lightYellow rounded-lg border border-lightYellow lg:w-60 md:w-60 md:h-60 w-40 h-40">
				</a>
			{/each}
		</div>
	</div>
	{/each}
</section>

<style>
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
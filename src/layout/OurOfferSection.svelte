<script>
    import { Button } from 'flowbite-svelte';
	import offertsData from '../data/offertsData/offerts';	
	import ClientBenefitsList from '../components/landing/ClientBenefitsList.svelte';
</script>

<section class="mt-20 mb-20 w-full flex flex-col ">
	{#each offertsData as offerData }


	<div class="m-2 flex {offerData.reverse ? 'flex-row-reverse': 'flex-row'}  w-full flex-wrap justify-center content-center">
	<div style="" class="text-wrap lg:w-4/12 md:w-12/12 w-12/12  flex justify-center items-center bg-white">
		<div style="min-width: 320px;" class="pt-6 pb-12 text-block max-w-sm  flex flex-col items-start  rounded-xl">
			<h2 class=" text-5xl mb-2 text-violDark  font-bold ">{offerData.title[0]}  <br> {offerData.title[1]}  <br> {offerData.title[2]}</h2>
			    <p class="font-normal text-violDark leading-tight">
					{offerData.description}
				</p>
				<ClientBenefitsList client={offerData.benefitsText}/>
			<Button href={offerData.link} size="xl" class=" mt-8   w-10/12" color="purple">Czytać więcej</Button>
		</div>
	</div>
	<div style="max-width: 900px;" class="flex flex-row flex-wrap p-2 rounded-lg  bg-violDark   flex-wrap justify-center content-center">
		{#each offerData.offerList as offer}
		<a class="hover:bg-lightYellow rounded-lg m-2 p-1" href={offerData.link + '#' + offer.anchor}>
			<img alt={offer.title} src={'/images' + offerData.link + '/benefits/mini/' + offer.miniImg} class="text-lightYellow rounded-lg border border-lightYellow w-60 h-60">
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
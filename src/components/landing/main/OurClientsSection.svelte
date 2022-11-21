<script>
    import { Button } from "flowbite-svelte";
	import ClientBenefitsList from "./ClientBenefitsList.svelte";
	import { clientTypes } from '../../../data/landing/offertsData/clientTypes';
</script>


<div class="w-full  flex flex-row flex-wrap justify-center">
		{#each clientTypes as client}
	
	<div    
		data-aos="{client.animation}"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true"

		style="min-height: 410px; height: auto; max-height: 650px;" class="m-2 lg:m-10 md:m-2 md:mt-6 sm:m-2  flex max-w-sm flex-col bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 p-0">
			<a href={client.link}>
				<img class="p-8 rounded-t-lg" src={client.img} alt={client.alt} />
			</a>
		<div class="px-5 pb-5">
			<a href={client.link}>
			<h2 class=" tracking-tight font-semibold text-left w-full mb-2 text-xl  font-semibold  text-violDark dark:text-white">
				{client.weHelp}
			</h2> 
			</a>
			<ClientBenefitsList client={client.listText}/>
			<div class="flex justify-between items-center">
			<span class="m-2 text-3xl font-bold text-viol dark:text-white">{client.type}</span>
			<Button color="purple" href={client.link}>{client.btnText}</Button>
			</div>
		</div>
	 </div>
	 {/each}
</div>


<style>

</style>
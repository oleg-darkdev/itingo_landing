<script>
    import { Button } from "flowbite-svelte";

    const clientTypes = [
		{
			type: 'Dla startupow',
			count: 0,
			weHelp: 'We help target audiences and investments',
			img: '/images/landing/clients/startups.svg',
			link: '/',
			alt: 'Startups image'
		},
		{
			type: 'Dla biznesu',
			count: 0,
			weHelp: 'We help target audiences and investments',
			img: '/images/landing/clients/business.svg',
			link: '/',
			alt: 'Business image'
		},
		{
			type: 'Dla IT wolontariutu',
			count: 0,
			weHelp: 'We help volunteers ................................................',
			img: '/images/landing/clients/volunteers.svg',
			link: '/',
			alt: 'Volunteers image'
		},
		{
			type: 'Dla NGO',
			count: 0,
			weHelp: 'We help ngo ........................................................................',
			img: '/images/landing/clients/ngo.svg',
			link: '/',
			alt: 'Ngo image'
		},
	]
</script>

<div class="w-full justify-center">
	<div style="justify-content: space-between;" class="lg:w-10/12 sm:w-12/12 md:w-12/12 flex-wrap row ">
	{#each clientTypes as client}
	<div style="min-height: 410px; height: auto; max-height: 430px;" class="lg:m-10 md:m-2 md:mt-6 sm:m-2  flex max-w-sm flex-col bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 p-0">
			<a href={client.link}>
				<img class="p-8 rounded-t-lg" src={client.img} alt={client.alt} />
			</a>
		<div class="px-5 pb-5">
			<a href={client.link}>
			<h5 class='text-xl font-semibold tracking-tight text-viol dark:text-white'>
				{client.weHelp} 
			</h5>
			</a>
			<div class="flex justify-between items-center">
			<span class="text-3xl font-bold text-viol dark:text-white">{client.type}</span>
			<Button color="purple" href={client.link}>Rejestracja</Button>
			</div>
		</div>
	 </div>
	 {/each}
    </div>
</div>
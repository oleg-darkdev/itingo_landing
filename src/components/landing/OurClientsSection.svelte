<script>
    import { Button } from "flowbite-svelte";

    const clientTypes = [
		{
			type: 'Dla IT wolontariutu',
			count: 0,
			weHelp: 'Nasze wsparcie dla IT wolontariutu',
			listText: [
				{
				colored: ['Potwierdzenie', 'projektach'],
				defaultColour: ['udziału w ', '']
			},
			{
				colored: ['Pomoc w', 'zatrudnieniu w IT'],
				defaultColour: ['następnym', '']
			},
			{
				colored: ['Listy polecające', 'po każdym skutecznie'],
				defaultColour: ['zakończonym projekcie', '']
			},
		],
			img: '/images/landing/clients/volunteers.svg',
			link: 'https://forms.gle/HopVuyRc8i3zi5YV7',
			alt: 'Volunteers image',
			animation: 'fade-left',
			btnText: 'Dołączyć do ekipy'
		},
		{
			type: 'Dla NGO',
			count: 0,
			weHelp: 'Nasze wsparcie dla NGO',
			listText: [
				{
				colored: ['Potwierdzenie', ''],
				defaultColour: ['udziału w ', '']
			},
			{
				colored: ['Potwierdzenie', 'projektach'],
				defaultColour: ['udziału', 'adasdads']
			},
			{
				colored: ['Potwierdzenie', 'projektach'],
				defaultColour: ['udziału', 'adasdads']
			},
		],
			img: '/images/landing/clients/ngo.svg',
			link: 'https://forms.gle/M5eVAR7oRuXVoder8',
			alt: 'Ngo image',
			animation: 'fade-up',
			btnText: 'Zgłosić projekt'
		},

		{
			type: 'Dla biznesu',
			count: 0,
			weHelp: 'Nasze wsparcie dla Dla biznesu',
			listText: [
				{
				colored: ['Nasza platforma', ''],
				defaultColour: ['wasz CSR', '']
			},
			{
				colored: ['Społeczność IT inżynierów', 'i osób z doświadczeniem '],
				defaultColour: ['dla Waszych HR', 'adasdads']
			},
			{
				colored: ['Pomoc', ' w inwestycjach'],
				defaultColour: ['w trzecim sektorze', '']
			},
		],
			img: '/images/landing/clients/business.svg',
			link: '/',
			alt: 'Business image',
			animation: 'fade-left',
			btnText: 'Zaoferować pomoc'
		},
		{
			type: 'Dla startupow',
			count: 0,
			weHelp: 'Masz pomysł i szukasz ekipy dla realizacji open-source projekta?',
			listText: [
				{
				colored: ['Potwierdzenie', ''],
				defaultColour: ['udziału w ', '']
			},
			{
				colored: ['Potwierdzenie', 'projektach'],
				defaultColour: ['udziału', 'adasdads']
			},
			{
				colored: ['Potwierdzenie', 'projektach'],
				defaultColour: ['udziału', 'adasdads']
			},

		],
			img: '/images/landing/clients/startups.svg',
			link: '/',
			alt: 'Startups image',
			animation: 'fade-left',
			btnText: 'Zgłosić projekt'
		},
				
		{
			type: 'Dla partnerów lokalnych',
			count: 0,
			weHelp: 'Pomoc w inwestycjach w trzecim sektorze i rekrutacja osób z doświadczeniem',
			listText: [
				{
				colored: ['Potwierdzenie', ''],
				defaultColour: ['udziału w ', '']
			},
			{
				colored: ['Potwierdzenie', 'projektach'],
				defaultColour: ['udziału', 'adasdads']
			},
			{
				colored: ['Potwierdzenie', 'projektach'],
				defaultColour: ['udziału', 'adasdads']
			},

		],
			img: '/images/landing/clients/local_partners.svg',
			link: '/',
			alt: 'Business image',
			animation: 'fade-right',
			btnText: 'Zaoferować pomoc'
		},

	]
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
			<div class="pl-5 flex flex-col justify-start">
				<ul class=" text-violDark max-w-md list-disc list-inside space-y-1">
					{#each client.listText as listItem}
						<li class="text-left">
							<span class="font-semibold text-lightYellow">{listItem.colored[0]}
							</span> {listItem.defaultColour[0]}
							<span class="font-semibold text-lightYellow">{listItem.colored[1]}	
							</span> {listItem.defaultColour[1]}					
						</li> 
					{/each}
				</ul>
			</div> 
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
<script>
    import { Button } from "flowbite-svelte";

    const clientTypes = [
		{
			type: 'Dla startupow',
			count: 0,
			weHelp: 'Masz pomysł i szukasz ekipy dla realizacji open-source projekta?',
			img: '/images/landing/clients/startups.svg',
			link: '/',
			alt: 'Startups image',
			animation: 'left',
			btnText: 'Zgłosić projekt'
		},
		{
			type: 'Dla biznesu',
			count: 0,
			weHelp: 'Pomoc w inwestycjach w trzecim sektorze i rekrutacja osób z doświadczeniem',
			img: '/images/landing/clients/business.svg',
			link: '/',
			alt: 'Business image',
			animation: 'right',
			btnText: 'Zaoferować pomoc'
		},
		{
			type: 'Dla IT wolontariutu',
			count: 0,
			weHelp: 'Potwierdzenie udziału w projektach, pomoc w następnym zatrudnieniu w IT',
			img: '/images/landing/clients/volunteers.svg',
			link: 'https://forms.gle/HopVuyRc8i3zi5YV7',
			alt: 'Volunteers image',
			animation: 'left',
			btnText: 'Dołączyć do ekipy'
		},
		{
			type: 'Dla NGO',
			count: 0,
			weHelp: 'Możliwość uzyskania wsparcia i poradnictwa w kwestiach IT',
			img: '/images/landing/clients/ngo.svg',
			link: 'https://forms.gle/M5eVAR7oRuXVoder8',
			alt: 'Ngo image',
			animation: 'right',
			btnText: 'Zgłosić projekt'
		},
	]
</script>


<div class="w-full justify-center">
	<div style="" class="pt-12 clients-wrap lg:w-10/12 w-12/12 md:w-12/12 flex-wrap row justify-center">
	{#each clientTypes as client}
	<div    
		data-aos="fade-{client.animation}"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true"
		style="min-height: 410px; height: auto; max-height: 430px;" class="m-2 lg:m-10 md:m-2 md:mt-6 sm:m-2  flex max-w-sm flex-col bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 p-0">
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
			<span class="m-2 text-3xl font-bold text-viol dark:text-white">{client.type}</span>
			<Button color="purple" href={client.link}>{client.btnText}</Button>
			</div>
		</div>
	 </div>
	 {/each}
    </div>
</div>


<style>
	@media (min-width: 1024px) {
		.clients-wrap {
			justify-content: space-between;
		}
	}

	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.clients-wrap {
			justify-content: center;
			align-items: center;
		}
	}
</style>
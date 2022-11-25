<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import CategoryCard from '../../components/landing/support/CategoryCard.svelte';
    import SubCategoryCard from '../../components/landing/support/SubCategoryCard.svelte';
    import MiniCard from '../../components/landing/support/MiniCard.svelte';
	const supportNgo = 
		{
		title: 'Wspieranie NGO uczestniczących w projekcie',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		donateTypes: [
			{
				title: 'Hosting dla strony  na 1 miesiąc',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				img: 'images/support/support_ngo_server.svg',
				value: '22',
				animation: 'fade-right'
			},
			{
				title: 'Nazwa domeny na 1 rok',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				img: 'images/support/support_ngo_domain.svg',
				value: '45',
				animation: 'fade-up'
			},
			{
				title: 'Strona www',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				img: 'images/support/support_ngo_www.svg',
				value: '240',
				animation: 'fade-left'
			}
		]
	};

	const supportVols = 	{
		title: 'Wspierać IT wolontariuszy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		donateTypes: [
        {
            title: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_vols_edu.svg',
            value: '40',
				animation: 'fade-right'
        },
        {
            title: 'Stworzenie nowych funkcji dla platformy ITingo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_vols_food.svg',
            value: '100',
				animation: 'fade-up'
        },
        {
            title: 'Zakupy oprogramowania typu open source',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/',
            value: '200',
				animation: 'fade-left'
        }
    ]
	}; 
    
	const supportCoordinator = 	{
		title: 'Wspierać koordynatora projektu',
		description: 'Założyciel ITingo to uchodźca polityczny z Białorusi, twórca wielu inicjatyw społecznych i po prostu niezły człowiek - potrzebujący osobistego wsparcia.',
		donateTypes: [
        {
            title: 'Olegowi na kawkę',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_oleg_coffe.svg',
            value: '15',
				animation: 'fade-right'
        },
        {
            title: 'Olegowi na obiad',
            description: 'Oleg być może jest kreatywnym inżynierem, ale jego gotowanie jest okropne. Nakarm Olega - smacznym obiadem.',
            img: 'images/support/support_oleg_eat.svg',
            value: '50',
				animation: 'fade-up'
        },
        {
            title: 'Olegowi na butlę z gazem',
            description: 'Oleg nie ma domu, nie może wrócić na Białoruś. Butle z gazem są jedynym środkiem do gotowania i ogrzewania przyczepy kempingowej, w której mieszka Oleg.',
            img: 'images/support/support_oleg_gas.svg',
            value: '100',
				animation: 'fade-left'
        }
    ]
};
	
	const supportITingo = 	{
		title: 'Udostępnij ITingo możliwość pomagania NGO',
		description: 'Zebrane pieniądze przeznaczamy na wynajem serwerów i stworzenie nowych funkcjonalności dla platformy ITingo, zakup oprogramowania open-source - co pomaga nam znacznie skuteczniej pomagać organizacjom pozarządowym oraz IT wolontariaty.',
		donateTypes: [
        {
            title: 'Wynajem serwera na miesiąc dla ITingo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_itingo_server.svg',
            value: '40',
				animation: 'fade-right'
        },
        {
            title: 'Stworzenie nowych funkcji dla platformy ITingo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_itingo_code.svg',
            value: '100',
				animation: 'fade-up'
        },
        {
            title: 'Zakupy oprogramowania typu open source',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_itingo_tools.svg',
            value: '200',
				animation: 'fade-left'
        }

    ]
};




const donateTypes = [
    {
        title: supportCoordinator.title,
        description: supportCoordinator.description,
        animation: 'fade-right',
        img: 'images/support/support_oleg_gas.svg',
        value: supportCoordinator
    },
    {
        title: supportVols.title,
        description: supportVols.description,
        animation: 'fade-down',
        img: 'images/support/support_vols_avatar.svg',
        value: supportVols
    },
    {
        title: supportNgo.title,
        description: supportNgo.description,
        animation: 'fade-up',
        img: 'images/support/support_ngo_avatar.svg',
        value: supportNgo
    },
    {
        title: supportITingo.title,
        description: supportITingo.description,
        animation: 'fade-left',
        img: 'images/support/support_itingo_avatar.svg',
        value: supportITingo
    },
];



const supportTypes = [
    {
        title: 'Jako IT wolontariat ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '',
        link: ''
    },
    {
        title: 'Zostań patronem',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '',
        link: ''
    },
    {
        title: 'Zostań partnerem lokalnym',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '',
        link: ''
    },
    {
        title: 'Zareklamuj w mediach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '',
        link: ''
    },
    {
        title: 'Program 1%',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '',
        link: ''
    },
    {
        title: 'Coś wyjątkowego',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '',
        link: ''
    }


    
];

    $: activeCategory = '';

    export let bgClass;
</script>

  
<section id="donate" class="{bgClass} w-full pb-12 pt-12 pr-2 pl-2 flex flex-col items-center ">
    <slot name="weDoFor">
        
    </slot>
<h2 class="w-full mt-8 mb-4 text-center text-6xl text-violDark font-black ">Wspieraj członków rodzinę <span class="text-logo-letter-spacing text-violDark text-stantley">ITingo</span></h2>
{#if !activeCategory}
    <div class="flex-row flex flex-wrap justify-center">
        {#each donateTypes as support}
            <CategoryCard {support} bind:activeCategory/>
        {/each}
    </div>
{:else }
    <div class="lg:w-10/12 w-full md:w-10/12 border border-gray-200 rounded-lg lg:p-6 md:p-6 mt-4 mb-4 p-2 bg-viol shadow-lg justify-center">
        <div class="flex-col flex">
            <h2 class="text-4xl w-full font-semibold text-gray-100 mt-8 ">{activeCategory.title}</h2>
            <p class="text-2xl  mb-4 text-gray-100 lg:w-8/12">{activeCategory.description}</p>
            <SubCategoryCard bind:activeCategory  />
        </div>
    </div>
{/if}
<!-- <div class="w-full flex justify-end">
<ButtonGroup>
    <Button size="xl" color="yellow" outline  href="/">Wspieram jednorazowo</Button>
    <Button size="xl" color="yellow"  href="/">Wspieram co miesiąc</Button>
</ButtonGroup>
</div> 
</div>
{/each}-->

<h2 class="w-full mt-8 mb-4 text-center text-6xl text-violDark font-black">Jak jeszcze można wspierać</h2>

<div class="lg:w-10/12 w-full md:w-10/12 flex flex-row flex-wrap border border-violDark rounded-lg lg:p-6 md:p-6 mt-4 mb-4 p-2 bg-viol shadow-lg justify-center"> 
    {#each supportTypes as support}
        <MiniCard {support} />
    {/each}
</div>

</section>


<style>


</style>
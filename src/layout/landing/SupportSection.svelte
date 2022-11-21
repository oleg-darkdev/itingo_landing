<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';

   
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

$: active = '';


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

 export let bgClass;
</script>

  
<section id="donate" class="{bgClass} w-full pb-12 pt-12 pr-2 pl-2 flex flex-col items-center ">
    <slot name="weDoFor">
        
    </slot>
<h2 class="w-full mt-8 mb-4 text-center text-6xl text-violDark font-black ">Wspieraj członków rodzinę <span class="text-logo-letter-spacing text-violDark text-stantley">ITingo</span></h2>
{#if !active}
<div class="flex-row flex flex-wrap justify-center">
{#each donateTypes as support}
  <div style="" data-aos={support.animation}
    data-aos-delay="100"
    data-aos-duration="1400" 
    data-aos-once="false"
    data-aos-mirror="true"  
    class="m-1 text-white rounded-lg   flex max-w-sm flex-col">
    <img  class="rounded-t-lg" src={support.img} alt={support.title}> 
    <div class="p-4 sm:p-6 bg-viol  shadow-md rounded-lg">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{support.title}
      </h5> 
      <p class="mb-3 font-normal text-ext-white  leading-tight">
        {support.description}
      </p> 
      <Button on:click={() => active = supportITingo} size='xl' class='w-8/12' color="yellow">Read more
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3">
          </path>
        </svg>
      </Button>
    </div>
  </div>
{/each}
</div>
{:else }
<div class="lg:w-10/12 w-full md:w-10/12 border border-gray-200 rounded-lg lg:p-6 md:p-6 mt-4 mb-4 p-2 bg-viol shadow-lg justify-center">
<div class="flex-col flex">
<h2 class="text-4xl w-full font-semibold text-gray-100 mt-8 ">{supportITingo.title}</h2>
<p class="text-2xl  mb-4 text-gray-100 lg:w-8/12">{supportITingo.description}</p>
<div class="flex-row flex flex-wrap justify-center  mb-6">
    {#each supportITingo.donateTypes as support}
        <div data-aos={support.animation}
                data-aos-delay="100"
                data-aos-duration="1400" 
                data-aos-once="false"
                data-aos-mirror="true"    
            class="m-2 bg-lightYellow  rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-sm flex-col">
            <img class="rounded-t-lg" src={support.img} alt=""> 
            <div class="p-4 sm:p-6">
                <div class="flex items-baseline text-violDark">
                    <span class="text-5xl font-extrabold tracking-tight">{support.value}</span>
                    <span class="text-3xl font-semibold">zł</span>
                </div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-violDark">{support.title}
                </h5> 
                <p class="mb-3 font-normal text-violDark  leading-tight">
                    {support.description}
                </p> 
                <Button size="md" color="purple"  href="/">Wspieraj</Button>
            </div>
        </div>
    {/each}
</div>
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
        <a href={support.link} class=" m-1 hover:bg-white bg-lightYellow text-violDark  rounded-lg border border-gray-200  shadow-md flex max-w-sm flex-col p-4 sm:p-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mb-2text-gray-500 dark:text-gray-400 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z">
            </path>
        </svg> 
        <a href="/">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-violDark">
                {support.title}
            </h5>
        </a> 
        <p class="mb-3 font-normal text-violDark">
            {support.description}
        </p> 
        </a>
    {/each}
</div>

</section>


<style>


</style>
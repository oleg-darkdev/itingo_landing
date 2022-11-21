<script>
    import { Card } from "flowbite-svelte";
    import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';

	onMount(() => {
        const progectsCountUp = new CountUp('progects', 4, { enableScrollSpy: true, duration: 8 }),
            volunteersCountUp = new CountUp('volunteers', 36, { enableScrollSpy: true, duration: 12 }),
            hoursCountUp = new CountUp('hours', 200, { enableScrollSpy: true, duration: 15 }),
            startupsCountUp = new CountUp('startups', 2, { enableScrollSpy: true, duration: 15 }),
            investmentsCountUp = new CountUp('investments', 0, { enableScrollSpy: true, duration: 15 }),
            appsVolsCountUp = new CountUp('apps_vols', 17, { enableScrollSpy: true, duration: 12 }),
            appsProgectsCountUp = new CountUp('apps_progects', 48, { enableScrollSpy: true, duration: 15 }),
            partnersCountUp = new CountUp('partners', 2, { enableScrollSpy: true, duration: 12 });
	});
    
       const impactData = [
        {
            text: 'Realizowane projekty',
            id: 'progects',
            reverse: false,
            
            link: '/ngo#trello',
            img: '/images/landing/impact/projects_impact.svg'
        },
        {
            text: 'Godzin wolontariatu',
            id: 'hours',
            reverse: true,
            
            link: '/volunteer',
            img: '/images/landing/impact/hours_impact.svg'
        },
        {
            text: 'Wnioski na realizacja projektów',
            id: 'apps_progects',
            reverse: false,
            link: '/workspace',
            img: '/images/landing/impact/progect application_impact.svg'
        },
        {
            text: 'Aplikacji na wolontariat',
            id: 'apps_vols', 
            reverse: true,
            link: 'https://forms.gle/HopVuyRc8i3zi5YV7',

            img: '/images/landing/impact/volunteer_application_impact.svg'
        },
        {
            text: 'Organizacji partnerskich',
            id: 'partners',
            reverse: false,
            link: '/our-family#partners',
            img: '/images/landing/impact/partners_impact.svg'
        },
        {
            text: 'Przyciągnięte inwestycji w Zł',
            id: 'investments', 
            reverse: true,
            link: '/',
            img: '/images/landing/impact/investments_impact.svg'
        }
    ]

</script>



<div style="justify-content: space-around;" class="flex flex-wrap row lg:w-10/12 md:w-12/12 sm:w-12/12 ">
    {#each impactData as impact}
    <Card  class="m-2" href={impact.link} img={impact.img} horizontal reverse={impact.reverse}>
        <h5 id={impact.id} class="mb-2 text-8xl font-bold tracking-tight text-viol dark:text-white"></h5>
        <p style="width: 250px;" class="mb-3 text-2xl font-normal text-violDark dark:text-gray-400 leading-tight">
            {impact.text}
        </p>
    </Card>
    {/each}    
</div>
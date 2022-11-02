<script>
    import { Card } from "flowbite-svelte";
    import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';

	onMount(() => {
    const progectsCountUp = new CountUp('progects', 4, { enableScrollSpy: true, duration: 20 }),
        volunteersCountUp = new CountUp('volunteers', 36, { enableScrollSpy: true, duration: 12 }),
        hoursCountUp = new CountUp('hours', 200, { enableScrollSpy: true, duration: 15 }),
        startupsCountUp = new CountUp('startups', 2, { enableScrollSpy: true, duration: 15 });
	});
    
</script>



<div style="justify-content: space-around;" class="flex flex-wrap row lg:w-10/12 md:w-12/12 sm:w-12/12 ">
    <Card  class="m-2" img='/images/landing/impact/projects_impact.svg' horizontal reverse='false'>
        <h5 id="progects" class="mb-2 text-8xl font-bold tracking-tight text-viol dark:text-white"></h5>
        <p style="width: 250px;" class="mb-3 text-2xl font-normal text-violDark dark:text-gray-400 leading-tight">
            Realizowane projekty
        </p>
    </Card>
    <Card  class="m-2" img='/images/landing/impact/volunteers_impact.svg' horizontal reverse='true'>
        <h5 id="volunteers" class="mb-2 text-8xl font-bold tracking-tight text-viol dark:text-white"></h5>
        <p style="width: 250px;" class="mb-3 text-2xl font-normal text-violDark dark:text-gray-400 leading-tight">
        Zatrudnieni wolontariusze
        </p>
    </Card>
    <Card  class="m-2" img='/images/landing/impact/hours_impact.svg' horizontal reverse='false'>
        <h5 id="hours" class="mb-2 text-8xl font-bold tracking-tight text-viol dark:text-white"></h5>
        <p style="width: 250px;" class="mb-3 text-2xl font-normal text-violDark dark:text-gray-400 leading-tight">
        Godzin wolontariatu
        </p>
    </Card>
    <Card  class="m-2" img='/images/landing/impact/startups_impact.svg' horizontal reverse='true'>
        <h5 id="startups" class="mb-2 text-8xl font-bold tracking-tight text-viol dark:text-white"></h5>
        <p style="width: 250px;" class="mb-3 text-2xl font-normal text-violDark dark:text-gray-400 leading-tight">
        Zakładane startupow
        </p>
    </Card>
</div>
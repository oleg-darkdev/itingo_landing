<script>
  import { Card } from "flowbite-svelte";

  const impactData = [
    {
        reverse: false,
        numbers: 2,
        title: 'Realizowane projekty',
        img: '/images/landing/impact/projects_impact.svg'
    },
    {
        reverse: true,
        numbers: 1,
        title: 'Zatrudnieni wolontariusze',
        img: '/images/landing/impact/volunteers_impact.svg'
    },
    {
        reverse: false,
        numbers: 200,
        title: 'Godzin wolontariatu',
        img: '/images/landing/impact/hours_impact.svg'
    },
    {
        reverse: true,
        numbers: 2,
        title: 'Zakładane startupow',
        img: '/images/landing/impact/startups_impact.svg'
    },
  ]
</script>



<div style="justify-content: space-around;" class="flex flex-wrap row lg:w-10/12 md:w-12/12 sm:w-12/12 ">
    {#each impactData as impact}
    <Card  class="m-2" img={impact.img} horizontal reverse={impact.reverse}>
        <h5 class="mb-2 text-8xl font-bold tracking-tight text-viol dark:text-white">{impact.numbers}</h5>
        <p style="width: 250px;" class="mb-3 text-2xl font-normal text-violDark dark:text-gray-400 leading-tight">
        {impact.title}
        </p>
    </Card>
    {/each}
</div>
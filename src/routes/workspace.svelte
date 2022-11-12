<script>
  import WorkspaceHeader from "../layout/WorkspaceHeader.svelte";
  import {  Button } from "flowbite-svelte";
  

const workspaceTypes = [
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/images/workspace/clients/volunteers.svg',
    btnText: 'For volunteers',
    link: '/workspace/volunteers'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/images/workspace/clients/ngo.svg',
    btnText: 'For NGO',
    link: '/workspace/ngo'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/images/workspace/progects.svg',
    btnText: 'For progects',
    link: '/workspace/progects'
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/images/workspace/clients/startups.svg',
    btnText: 'For startups',
    link: '/workspace/startups'
  },
]
</script>

<WorkspaceHeader />

<section class="bg-lightYellow pt-12 pb-12">
  <div class="w-full flex flex-row flex-wrap justify-center">
  {#each workspaceTypes as type}
  <a href={type.link}>
  <div class="m-1 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-sm flex-col">
    <img  class="rounded-t-lg" src={type.img} alt={type.title}> 
    <div class="p-4 sm:p-6 bg-viol rounded-lg">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{type.title}
      </h5> 
      <p class="mb-3 font-normal text-ext-white  leading-tight">
        {type.description}
      </p> 
      <Button href={type.link} size='xl' class='w-8/12' color="yellow">{type.btnText}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3">
          </path>
        </svg>
      </Button>
    </div>
  </div>
  </a>
  {/each}
  </div>
</section>
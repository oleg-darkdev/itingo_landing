<script lang="ts">
    import { Button } from 'flowbite-svelte';
    
    export let support: {link: string, title: string, description: string, animation: string, img: string, value: any}, activeCategory: any;    
</script>


<div style="" data-aos={support.animation}
    data-aos-delay="100"
    data-aos-duration="1400" 
    data-aos-once="false"
    data-aos-mirror="true"  
    class="m-1 text-white rounded-lg   flex max-w-sm flex-col">
    <img loading="lazy"  class="rounded-t-lg" src={support.img} alt={support.title}> 
    <div class="p-4 sm:p-6 bg-viol  shadow-md rounded-lg">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{support.title}
      </h5> 
      <p class="mb-3 font-normal text-ext-white  leading-tight">
        {support.description}
      </p> 
      <Button on:click={() => activeCategory = support.value} size='xl' class='w-8/12' color="yellow">Read more
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3">
          </path>
        </svg>
      </Button>
    </div>
  </div>
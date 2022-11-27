<script lang="ts">
    import { Button } from 'flowbite-svelte';

    export let support: {link: string, title: string, description: string, animation: string, img: string, value: any};
</script>


<div class="m-2 bg-lightYellow  rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-sm flex-col">
    <img loading="lazy"  class="rounded-t-lg" src={support.img} alt=""> 
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
        <Button size="md" color="purple"  href="#contact">Wspieraj</Button>
    </div>
</div>

<script >
    import { Button } from 'flowbite-svelte';

    export let activeCategory;
</script>


<div class="flex-row flex flex-wrap justify-center  mb-6">
    {#each activeCategory.donateTypes as support}
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
                <Button size="md" color="purple"  href="#contact">Wspieraj</Button>
            </div>
        </div>
    {/each}
</div>
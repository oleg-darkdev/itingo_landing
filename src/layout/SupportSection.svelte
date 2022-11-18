<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';

    export let supportData;
</script>


<section id="donate" class="bg-violDark w-full p-12 flex flex-col items-center ">
{#each supportData as supportEl}
<div class="lg:w-10/12 border border-gray-200  rounded-lg p-6 m-4 bg-viol shadow-lg">
<h2 class="text-4xl w-full font-semibold text-gray-100 mt-8 ">{supportEl.title}</h2>
<p class="text-2xl  mb-4 text-gray-100 lg:w-8/12">{supportEl.description}</p>
<div class="flex-row flex flex-wrap justify-center  mb-6">
{#each supportEl.donateTypes as support}
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

<!-- <div class="w-full flex justify-end">
<ButtonGroup>
    <Button size="xl" color="yellow" outline  href="/">Wspieram jednorazowo</Button>
    <Button size="xl" color="yellow"  href="/">Wspieram co miesiąc</Button>
</ButtonGroup>
</div> -->
</div>
{/each}
</section>

<style>


</style>
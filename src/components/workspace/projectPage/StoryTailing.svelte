<script>

    export let text;
</script>

<a class="mb-4 bg-viol dark:bg-gray-800 text-gray-500  rounded-lg border border-gray-200  shadow-md flex max-w-sm flex-col  p-4 sm:p-6 ">
    <h3 class="mb-2 text-2xl font-bold tracking-tight text-white ">
        Jak powstał ten projekt
    </h3> 
    {#each text as p}
    <p class="font-normal mt-2 mb-2 text-white leading-tight ">
        {p}
    </p>
    {/each}
</a>


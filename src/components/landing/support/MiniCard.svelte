<script>

    export let support;
</script>


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
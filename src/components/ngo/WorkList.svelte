<script>
    // import ListTasks from './ListTasks.svelte';
    
    export let dataAboutService;  
</script>



<div class="flex justify-end mb-6 ">
  <ol class="relative border-l w-8/12 border-viol dark:border-gray-700">    
    {#each dataAboutService as step}              
      <li class="mb-2 ml-6">            
          <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-viol rounded-full ring-8 ring-white dark:ring-viol dark:bg-blue-900">
              <svg aria-hidden="true" class="w-3 h-3 text-lightYellow dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-viol dark:text-white">{step.title} </h3>
          <!-- <span class="bg-viol text-lightYellow text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span> -->
          <!-- <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-violDark">{step.subTitle} </time> -->
          {#each step.description as description}
            <p class=" text-base font-normal text-violDark dark:text-gray-400">{description}</p>
          <!-- <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-viol bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> -->
          {/each}

          <!-- <ListTasks /> -->
        </li>
    {/each}
  </ol>
</div>
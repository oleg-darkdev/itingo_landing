<script>
    export let workTask;  
</script>

<div style="" class="bg-white lg:m-4 m-1 mb-4 h-auto rounded-lg  shadow-lg flex lg:w-3/12 md:w-5/12 w-full flex-col">
  <img class="rounded-t-lg" src="{workTask.bgImage}" alt="{workTask.title}"> 
  <div style="min-height: 270px;" class="p-4 sm:p-6 bg-viol rounded-lg ">
      <h2 class="text-lg text-2xl font-semibold text-white dark:text-white w-full mb-2 text-lg font-semibold  text-white dark:text-white">
        {workTask.title}
      
      </h2> 
      <ul class="text-white dark:text-gray-400 max-w-md list-disc list-inside space-y-1">
        {#each workTask.tasks as task}
        <li class="">
          <span class="font-semibold text-white dark:text-white">{task}
          </span> 
        </li> 
          {/each}
    
      </ul>
  </div>
</div>


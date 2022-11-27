<script lang="ts">

  export  let page: {name: string, route: string, description: string, path: any}; 
</script>



<a href={page.route} class="mt-1 mb-1 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-sm flex-col hover:bg-gray-100 dark:hover:bg-gray-700 p-4 sm:p-6">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    {#each page.path as path}
    <li class="group flex items-center" href={path.link}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mx-1 h-6 w-6 text-viol group-first:hidden md:mx-2" aria-hidden="true" aria-label="chevron right" fill="none" viewBox="0 0 24 24" stroke-width="2">
        <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        </path> 
      </svg>
      <a class="inline-flex items-center text-sm font-medium text-viol" href={path.link}> {path.title}
      </a>
    </li>
    {/each}
  </ol>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-violDark">{page.name}</h5>
  <p class="font-normal text-violDark leading-tight">
    {page.description}
  </p>
</a>

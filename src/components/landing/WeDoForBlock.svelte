<script>
    import { Button } from "flowbite-svelte"; 
    import socialItingoLinks from '../../data/landing/socialItingoLinks';

    let showOptionsList = false;
</script>

<div class="flex w-full justify-center relative ">
  <div 
    data-aos="fade-up"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="true"
		data-aos-mirror="true"
    style="min-height: 260px; height: auto; margin-top: -180px;" class="p-2 md:w-8/12 text-center z-2 flex lg:w-5/12 flex-col bg-viol shadow-md text-gray-500 w-11/12 rounded-lg lg:p-4 p-2 text-center">
    
    <h5 class="mb-2 text-3xl font-bold text-white">IT wsparcie dla wspierających</h5>
    <p class="mb-5 text-base text-white sm:text-lg dark:text-gray-400">
		  <span class="text-2xl text-lightYellow font-black">ITingo</span> to platforma internetowa, która łączy IT wolontariuszy, organizacje pozarządowe, biznes i startupy - w celu dostarczenia projektów IT online.
    </p>
    {#if !showOptionsList} 
    <div class="mb-5 pl-5 flex flex-col justify-start ">
      <h2 class="text-lg font-semibold text-left w-full mb-2 text-lg font-semibold  text-white dark:text-white">
        Jesteśmy aktywnymi członkami społeczności Open Source - w pełni otwarci i przejrzyści
      </h2> 
      
      <ul class="ml-10 text-white max-w-md list-disc list-inside space-y-1">
        <li class="text-left">
          <span class="font-semibold text-lightYellow"> kod źródłowy platformy
          </span> jest dostępny
          <a href={socialItingoLinks.github.link} class="inline-flex font-semibold text-lightYellow  hover:underline">
             na GitHubie
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a> 
        </li> 
        <li class="text-left">
          <span class="font-semibold text-lightYellow">nasze działania 
          </span> jest dostępny
          <a href={socialItingoLinks.trello.link}  class="inline-flex font-semibold text-lightYellow  hover:underline">
              na Trello.
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a> 
        </li> 
      </ul>

      <span class="text-start text-base text-white sm:text-lg">
        Promujemy wykorzystanie w projektach 
          <a href='https://svelte.dev/'  class="inline-flex font-semibold text-lightYellow  hover:underline">
              SvelteJS
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a>
      </span> 
    </div> 
    <p class="mb-3 text-center  text-base text-white sm:text-lg  dark:text-gray-400 leading-tight">
      Dołącz się do naszej rodziny i zacznij zmieniać świat trzeciego sektora!
    </p>

    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <Button size="xl" class="w-6/12" on:click={()=> showOptionsList = !showOptionsList} color="yellow">Rozpocząć</Button>
    </div>
    {:else}
      <div class="justify-center items-center ">
        <div class="lg:w-6/12 md:w-8/12 w-10/12 flex-col justify-center items-between">
          <Button size="xl" class="m-1" href='' color="yellow">Jako NGO</Button>
          <Button size="xl" class="m-1" href='' color="yellow">Jako IT wolontariat</Button>
          <Button size="xl" class="m-1" href='' color="yellow">Jako partner lokalny</Button>
          <Button size="xl" class="m-1" href='' color="yellow">Jako startup</Button>
          <Button size="xl" class="m-1" href='' color="yellow">Jako biznes</Button>         
        </div>
      </div>
    {/if}
  </div>
</div>



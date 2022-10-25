<script>
    import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<div class="flex w-full justify-center relative ">
  <div style="min-height: 260px; margin-top: -180px;" class="sm:max-w-max text-center z-2 flex w-5/12 flex-col bg-viol shadow-md text-gray-500 dark:text-gray-400 rounded-lg  lg:p-4 sm:p-1 text-center">
    <h5 class="mb-2 text-3xl font-bold text-white">Wspieramy wsperajiencych</h5>
    <p class="mb-5 text-base text-white sm:text-lg dark:text-gray-400">
		  ITingo to platforma internetowa, która łączy IT , wolontariuszy, organizacje pozarządowe, biznes i start-upy - w celu dostarczenia projektów IT online.
    </p>
    <p class="mb-3 text-center  text-base text-white sm:text-lg  dark:text-gray-400 leading-tight">
      Zarejestruj się i zacznij zmieniać świat organizacji pozarządowych!
    </p>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <ButtonGroup>
          <Button outline size="lg" color="yellow">Jako NGO</Button>
          <Button outline size="lg" color="yellow">Jako startup</Button>
          <Button outline size="lg" color="yellow">Jako biznes</Button>
          <Button outline size="lg" color="yellow">Jako IT wolontariat</Button>
      </ButtonGroup>
    </div>
  </div>
</div>



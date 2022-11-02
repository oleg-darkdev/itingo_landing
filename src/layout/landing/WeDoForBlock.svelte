<script>
    import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<div class="flex w-full justify-center relative ">
  <div 
    data-aos="fade-up"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="true"
		data-aos-mirror="true"
    style="min-height: 260px; height: auto; margin-top: -180px;" class=" md:w-8/12 text-center z-2 flex lg:w-5/12 flex-col bg-viol shadow-md text-gray-500 dark:text-gray-400 lg:rounded-lg md:rounded-lg lg:p-4 p-2 text-center">
    <h5 class="mb-2 text-3xl font-bold text-white">Wspieramy wsperajiencych</h5>
    <p class="mb-5 text-base text-white sm:text-lg dark:text-gray-400">
		  <span class="text-2xl text-lightYellow font-black">ITingo</span> to platforma internetowa, która łączy IT , wolontariuszy, organizacje pozarządowe, biznes i start-upy - w celu dostarczenia projektów IT online.
    </p>
    <p class="mb-3 text-center  text-base text-white sm:text-lg  dark:text-gray-400 leading-tight">
      Zarejestruj się i zacznij zmieniać świat organizacji pozarządowych!
    </p>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <ButtonGroup>
          <Button outline  color="yellow">Jako NGO</Button>
          <Button outline  color="yellow">Jako startup</Button>
          <Button outline  color="yellow">Jako biznes</Button>
          <Button outline  color="yellow">Jako IT wolontariat</Button>
      </ButtonGroup>
    </div>
  </div>
</div>



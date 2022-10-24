<script>
    import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<div class="flex w-full justify-center relative ">
  <div style="min-height: 320px; margin-top: -180px;" class="text-center z-2 flex max-w-2xl flex-col bg-viol shadow-md text-gray-500 dark:text-gray-400 rounded-lg  p-8 text-center">
    <h5 class="mb-2 text-3xl font-bold text-white">Wspieramy wsperajiencych</h5>
    <p class="mb-5 text-base text-white sm:text-lg dark:text-gray-400">
      Vollie is an online marketplace that connects skilled people to non-profits, charities and social enterprises for skills-based online volunteering. Vollie projects are exclusively online, meaning that people can donate their skills and experience from anywhere in the world, and around their busy personal and professional schedule. Sign up today and start changing the world!
    </p>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <ButtonGroup>
          <Button outline size="lg" color="yellow">Dla NGO</Button>
          <Button outline size="lg" color="yellow">Dla startupow</Button>
          <Button outline size="lg" color="yellow">Dla biznesu</Button>
          <Button outline size="lg" color="yellow">Dla IT wolontariutu</Button>
      </ButtonGroup>
    </div>
  </div>
</div>



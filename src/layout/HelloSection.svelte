<script>
    import { Card, ButtonGroup, Button, Toggle } from "flowbite-svelte";
</script>

<Card style="" class="" img="/images/hello.svg" horizontal reverse={false}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HOW VOLLIE MAKES VIRTUAL
VOLUNTEERING EASY</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Vollie is an online marketplace that connects skilled people to non-profits, charities and social enterprises for skills-based online volunteering. Vollie projects are exclusively online, meaning that people can donate their skills and experience from anywhere in the world, and around their busy personal and professional schedule. Sign up today and start changing the world!
    </p>
	<div class="w-full mt-4 mb-2 flex justify-center">
		<ButtonGroup>
			<Button outline size="lg" color="yellow">Find volunteers</Button>
			<Button size="lg" color="yellow">Volunteer now</Button>
		</ButtonGroup>
	</div>
  </Card>
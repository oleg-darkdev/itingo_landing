<script>
    import { Card, ButtonGroup, Button, Toggle } from "flowbite-svelte";
</script>

<Card style="" class="mb-32" img="/images/landing/hello.svg" horizontal reverse={false}>
    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-violDark dark:text-white">Jak <span class="mb-2 text-3xl font-black" >ITingo</span> ulatwia IT wolontariat</h5>
    <p class="mb-3 text-center font-normal text-viol dark:text-gray-400 leading-tight">
		ITingo to platforma internetowa, która łączy IT , wolontariuszy, organizacje pozarządowe, biznes i start-upy - w celu dostarczenia projektów IT online.
    </p>
    <p class="mb-3 text-center font-normal text-viol dark:text-gray-400 leading-tight">
		Zarejestruj się już dziś i zacznij zmieniać świat organizacji pozarządowych!
    </p>
	<div class="w-full mt-4 mb-2 flex justify-center">
		<ButtonGroup>
			<Button outline size="lg" color="yellow">Znajdź wolontariuszy</Button>
			<Button size="lg" color="yellow">Zostań wolontariuszem</Button>
		</ButtonGroup>
	</div>
</Card>





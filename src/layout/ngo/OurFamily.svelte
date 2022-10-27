<script>
    import { Button } from 'flowbite-svelte';

	export let member, anchor;
</script>

<!-- class:active={}  -->
<section id={anchor} style="background-position: {member.align == 'start' ? 'right': 'left'}; background-image: url({member.bgImage});" class="our-member justify-{member.align} content-center pr-20" >
	<div style="" class="lg:w-7/12 md:w-12/12 sm:w-12/12 bg-white flex justify-end items-center">
		<div style="min-width: 320px;" class="flex flex-col items-center">
			<h2 class=" m-8  text-6xl text-lightYellow font-bold ">{anchor}</h2>
			<!-- logotypes + member.title-->
			<!--  -->
			<Button size="xl" class="w-10/12" color="purple">Dołącz do rodziny</Button>

		</div>
	</div>
</section>


<style>
    .our-member {
		min-height: 100vh;
		height: auto;
		background-repeat: no-repeat;		
		background-size: auto;
		background-attachment: fixed;
	}
</style>
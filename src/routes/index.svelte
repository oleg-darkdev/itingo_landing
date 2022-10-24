<script>
	import { ButtonGroup, Button  } from "flowbite-svelte";
	import HelloSection from '../layout/landing/HelloSection.svelte';
	import ClientsSection from '../layout/landing/ClientsSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
</script>

<svelte:head>
	<title>ITingo</title>
</svelte:head>



<section class="items-center title bg-lightYellow w-full mb-12">
	<h1 class="w-8/12 text-center text-7xl text-white font-black">Witamy w domu IT wolontariatu</h1>
</section>

<HelloSection>
	<ButtonGroup>
		<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
		<Button size="lg" color="purple">Zostań wolontariuszem</Button>
	</ButtonGroup>
</HelloSection>

<ClientsSection />

<StepsSection />

<ImpactSection />

<OurFamilySection />

<FaqSection />

<ContactSection />



<style>
	.title {
		height: 300px;
	}






</style>


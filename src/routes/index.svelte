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



<section class="banner items-center  w-full mb-12 flex flex-col justify-center">
	<div style="min-height: 150px;" class="h-auto p-2 bg-viol lg:w-5/12 md:w-6/12 sm:w-8/12 flex rounded-xl justify-center">
		<h1 class="w-full text-center lg:text-7xl md:text-6xl sm:text-5xl text-white font-black">Witamy w domu IT wolontariatu</h1>
	</div>
	<!-- куда её ? -->
	<!-- <HelloSection>
	<ButtonGroup>
		<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
		<Button size="lg" color="purple">Zostań wolontariuszem</Button>
	</ButtonGroup>
	</HelloSection> -->
</section>



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


	.banner {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/bg/banner-bg.svg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto;
	}



</style>


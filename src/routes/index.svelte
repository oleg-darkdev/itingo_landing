<script>
	import { ButtonGroup, Button  } from "flowbite-svelte";
	import HelloSection from '../layout/landing/HelloSection.svelte';
	import ClientsSection from '../layout/landing/ClientsSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
	import SocialMedia from "../layout/contact/SocialMedia.svelte";
	import faqList from "../data/landing/landingFaqList";
</script>

<svelte:head>
	<title>ITingo</title>
</svelte:head>



<section class="banner items-center  w-full  flex flex-col justify-center">
	<div style="" class="h-auto p-2 bg-viol lg:w-5/12 md:w-6/12  w-12/12  flex flex-col rounded-xl justify-center">
		<h1 class="w-full text-center lg:text-7xl md:text-6xl text-5xl text-white font-black mb-8">
			<span class="text-lightYellow text-stantley">ITingo</span>
			 - dom IT wolontariatu</h1>
		<SocialMedia />
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

<FaqSection {faqList}/>

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
		background-attachment: fixed;
	}
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.banner {
			background-size: 100%; 
			margin-bottom: 10px;
			background-size: cover;
			background-position: right;
		}
	}

</style>


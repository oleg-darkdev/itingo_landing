<script>
	import { Button  } from "flowbite-svelte";
	import SocialMedia from "../layout/contact/SocialMedia.svelte";
	import HelloSection from '../layout/landing/HelloSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';

	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';
	import workTypes from '../data/ngo/workTypes';
	import faqList from '../data/ngo/ngoFaqList';

	
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>

<section class="banner items-center  w-full  flex flex-col justify-center">
	<div style="" class="h-auto mb-20 p-2 bg-viol lg:w-5/12 md:w-6/12  sm:w-10/12  flex flex-col rounded-xl justify-center">
		<h1 class="w-full text-center lg:text-7xl md:text-6xl text-5xl text-white font-black mb-8"><span class="text-lightYellow">ITingo</span> - dom IT wolontariatu</h1>
		<SocialMedia />
	</div>
	<a id="volunteer" ></a>
	<HelloSection>
		<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
	</HelloSection>
</section>

{#each workTypes as typeWork}
	<TypesOfWorks {typeWork}/>
{/each}

<StepsSection />

<ImpactSection />

<OurFamilySection />

<a id="faq" ></a>
<FaqSection {faqList}/>

<ContactSection />


<style>
		.banner {
		min-height: 130vh;
		height: auto;
		background-image: url(/images/landing/bg/banner-bg.svg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto;
		background-attachment: fixed;
	}

</style>
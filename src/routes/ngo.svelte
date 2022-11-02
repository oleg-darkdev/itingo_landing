<script>
	import BannerSection from "../layout/BannerSection.svelte";
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';
	import workTypes from '../data/ngo/workTypes';
	import faqList from '../data/ngo/ngoFaqList';
	import dataForTimeline from '../data/ngo/dataForTimeline';
	
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>

<BannerSection />

<ImpactSection />

<StepsSection text='Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach' {dataForTimeline}>
	<!-- <svelte:fragment slot="block">

	</svelte:fragment> -->
</StepsSection>

<section style="background-image: url('/images/ngo/work_banner-bg.svg');" class="banner items-center  w-full  flex flex-col justify-center">
<!--  add blocks inside -->
</section>

{#each workTypes as typeWork}
	<TypesOfWorks {typeWork}/>
{/each}



<OurFamilySection />

<a id="faq" ></a>
<FaqSection {faqList}/>

<ContactSection />


<style>
	
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.banner {
			background-size: 100%; 
			margin-bottom: 10px;
			height: auto;
			background-size: cover;
		}
	}

</style>
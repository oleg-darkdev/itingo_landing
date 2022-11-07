<script>
	import Header from '../layout/Header.svelte';
	import BannerSection from "../layout/BannerSection.svelte";
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';
	import workTypes from '../data/ngo/workTypes';
	import faqList from '../data/faq/ngoFaqList';
	import dataForTimeline from '../data/ngo/dataForTimeline';
	import FeedbackSection from "../layout/FeedbackSection.svelte";
	import TrelloBoardSection from '../layout/workspace/TrelloBoardSection.svelte';
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>

<Header />

<BannerSection />


<ImpactSection />

<TrelloBoardSection />

<StepsSection text='Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach' {dataForTimeline}>
	<!-- <svelte:fragment slot="block">

	</svelte:fragment> -->
</StepsSection>
<FeedbackSection />
<section style="background-image: url('/images/ngo/work_banner-bg.svg');" class="banner items-center  w-full  flex flex-col justify-center">
<!--  add blocks inside -->
</section>

{#each workTypes as typeWork}
	<TypesOfWorks {typeWork} btnLink='https://forms.gle/M5eVAR7oRuXVoder8'/>
{/each}

<a id="faq" ></a>
<FaqSection title='Pytania i odpowiedzi dla NGO' {faqList} bgImgClass='faq-bg-ngo'/>

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
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
	import WorkBannerSection from '../layout/ngo/WorkBannerSection.svelte';
	import Presentation from "../components/resources/Presentation.svelte";
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/ngo/banner_ngo-bg.svg'/>

<ImpactSection />

<Presentation />

<section class="flex items-center flex-col lg:p-20 p-4 bg-lightYellow" >
	<TrelloBoardSection boardLink='https://trello.com/b/2RHOp366.html'/>
</section>

<StepsSection text='Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach' {dataForTimeline}>
	<!-- <svelte:fragment slot="block">

	</svelte:fragment> -->
</StepsSection>
<FeedbackSection />

<WorkBannerSection title='W czym dokładnie możemy pomóc NGO'/>



{#each workTypes as typeWork}
	<TypesOfWorks {typeWork} btnLink='https://forms.gle/M5eVAR7oRuXVoder8'/>
{/each}

<a id="faq" ></a>
<FaqSection title='Pytania i odpowiedzi dla NGO' {faqList} bgImgClass='faq-bg-ngo'/>

<ContactSection />

<style>


</style>
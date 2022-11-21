<script>
	import Header from '../layout/landing/Header.svelte';
	import BannerSection from "../layout/landing/BannerSection.svelte";
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
	import TypesOfWorks from '../layout/landing/ngo/TypesOfWorks.svelte';
	import FeedbackSection from "../layout/landing/FeedbackSection.svelte";
	import WorkBannerSection from '../layout/landing/ngo/WorkBannerSection.svelte';
	import Presentation from "../components/landing/resources/Presentation.svelte";
	import SupportSection from '../layout/landing/SupportSection.svelte';
	import WeDoForBlock from '../components/landing/WeDoForBlock.svelte';

	import workTypes from '../data/landing/ngo/workTypes';
	import faqList from '../data/landing/faq/ngoFaqList';
	import dataForTimeline from '../data/landing/ngo/dataForTimeline';
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/ngo/banner_ngo-bg.svg'/>

<StepsSection text='Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach' {dataForTimeline}>
	<svelte:fragment slot="weDoFor">
		<WeDoForBlock />
	</svelte:fragment>
</StepsSection>

<ImpactSection />

<Presentation />

<SupportSection />


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
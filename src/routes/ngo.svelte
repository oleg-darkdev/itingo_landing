<script>
	import Header from '../layout/Header.svelte';
	import BannerSection from "../layout/BannerSection.svelte";
	import StepsSection from '../layout/StepsSection.svelte';
	import ImpactSection from '../layout/ImpactSection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';
	import workTypes from '../data/ngo/workTypes';
	import faqList from '../data/faq/ngoFaqList';
	import dataForTimeline from '../data/ngo/dataForTimeline';
	import FeedbackSection from "../layout/FeedbackSection.svelte";
	import WorkBannerSection from '../layout/ngo/WorkBannerSection.svelte';
	import Presentation from "../components/resources/Presentation.svelte";
	import SupportSection from '../layout/SupportSection.svelte';
	import WeDoForBlock from '../components/WeDoForBlock.svelte';
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
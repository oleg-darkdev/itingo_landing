<script>
    import Header from '../layout/Header.svelte';
	import BannerSection from "../layout/BannerSection.svelte";
	import ClientsSection from '../layout/landing/ClientsSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import RegistrationBlock from "../layout/landing/RegistrationBlock.svelte";
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	import dataForTimeline from '../data/ngo/dataForTimeline';
	import faqList from "../data/landing/landingFaqList";
	import FeedbackSection from "../layout/FeedbackSection.svelte";
</script>

<Header />

<svelte:head>
	<title>ITingo - home</title>
</svelte:head>

<BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/>

<ClientsSection />

<StepsSection text='Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach' {dataForTimeline}>
	<svelte:fragment slot="block">
		<RegistrationBlock /> 
	</svelte:fragment>
</StepsSection>


<ImpactSection />

<OurFamilySection />

<FeedbackSection />

<FaqSection {faqList}/>

<ContactSection />


<style>
	.title {
		height: 300px;
	}




</style>


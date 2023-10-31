<script>
    import Header from '../layout/landing/Header.svelte';
	import BannerSection from "../layout/landing/BannerSection.svelte";
	import ClientsSection from '../layout/landing/main/ClientsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';	
	import faqList from '../data/landing/faq/landingFaqList';
	import FeedbackSection from "../layout/landing/FeedbackSection.svelte";
	import SupportSection from '../layout/landing/SupportSection.svelte';
	import OurOfferSection from '../layout/landing/OurOfferSection.svelte';
	import WeDoForBlock from '../components/landing/WeDoForBlock.svelte';
</script>

<svelte:head>
	<title>ITingo - home</title>
</svelte:head>

<Header />



<BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/> <!-- white -->

<ClientsSection> <!-- yellow -->
	<svelte:fragment slot="weDoFor">
		<WeDoForBlock />
	</svelte:fragment>
</ClientsSection>

<SupportSection bgClass='bg-gray-200'/> <!-- white -->

<ImpactSection /> <!-- viol -->




<!-- <StepsSection text='Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach' {dataForTimeline}>
	<svelte:fragment slot="block">
		<RegistrationBlock /> 
	</svelte:fragment>
</StepsSection> -->


<OurOfferSection  />



<!-- <FeedbackSection />  -->
<!-- yellow -->


<!-- become us --> <!-- viol -->

<!-- roadmap --> <!-- yellow -->


<!-- del <OurFamilySection /> -->


<FaqSection title='Pytania i odpowiedzi: sprawy ogólne' {faqList} bgImgClass='faq-bg-main'/> <!-- white -->

<ContactSection />


<style>
	.title {
		height: 300px;
	}
</style>


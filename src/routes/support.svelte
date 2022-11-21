<script>
	import Header from '../layout/landing/Header.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';	
	import ContactSection from '../layout/landing/ContactSection.svelte';
	import faqList from '../data/landing/faq/ngoFaqList';
	import SupportSection from '../layout/landing/SupportSection.svelte';
	import BannerSection from "../layout/landing/BannerSection.svelte";
	import WeDoForBlock from '../components/landing/WeDoForBlock.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurOfferSection from '../layout/landing/OurOfferSection.svelte';
</script>

<svelte:head>
	<title>Wspieraj ITIngo</title>
</svelte:head>

<Header />

<!-- <BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/>  -->
<section style="height: 300px; width: 100%;">

</section>
<SupportSection bgClass='bg-lightYellow'>
	<svelte:fragment slot="weDoFor">
		<WeDoForBlock />
	</svelte:fragment>
</SupportSection>

<OurOfferSection  />

<ImpactSection />

<a id="faq" ></a>
<FaqSection title='Pytania i odpowiedzi: sprawy ogólne' {faqList} bgImgClass='faq-bg-main'/> 

<ContactSection />
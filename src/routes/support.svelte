<script>
	import Header from '../layout/Header.svelte';
	import FaqSection from '../layout/FaqSection.svelte';	
	import ContactSection from '../layout/ContactSection.svelte';
	import faqList from '../data/faq/ngoFaqList';
	import SupportSection from '../layout/SupportSection.svelte';
	import BannerSection from "../layout/BannerSection.svelte";
	import WeDoForBlock from '../components/WeDoForBlock.svelte';
	import ImpactSection from '../layout/ImpactSection.svelte';
	import OurOfferSection from '../layout/OurOfferSection.svelte';
</script>

<svelte:head>
	<title>Wspieraj ITIngo</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/> 

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
<script>
	import BannerSection from "../layout/landing/BannerSection.svelte";
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import Header from '../layout/landing/Header.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
	
	
	import faqList from '../data/landing/faq/businessFaqList';

</script>

<svelte:head>
	<title>ITingo dla biznesu</title>
</svelte:head>

<Header />


<BannerSection bgImg='/images/business/banner_business-bg.svg'/>


<FaqSection title='Pytania i odpowiedzi dla sponsorów i partnerów' {faqList} bgImgClass='faq-bg-partners'/>
<ContactSection />


<style>
    
</style>
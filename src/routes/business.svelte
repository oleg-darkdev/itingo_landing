<script>
	import BannerSection from "../layout/BannerSection.svelte";
	import FaqSection from '../layout/FaqSection.svelte';
	import Header from '../layout/Header.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	
	
	import faqList from '../data/faq/businessFaqList';

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
<script>
	import Header from '../layout/Header.svelte';
	import FaqSection from '../layout/FaqSection.svelte';	
	import ContactSection from '../layout/ContactSection.svelte';
	import faqList from '../data/faq/ngoFaqList';
	import SupportSection from '../layout/SupportSection.svelte';
	import BannerSection from "../layout/BannerSection.svelte";
</script>

<svelte:head>
	<title>Wspieraj ITIngo</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/> 

<SupportSection />
<!-- add how to we help blocks -->
<a id="faq" ></a>
<FaqSection title='Pytania i odpowiedzi: sprawy ogólne' {faqList} bgImgClass='faq-bg-main'/> 

<ContactSection />
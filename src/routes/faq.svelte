<script>
	import Header from '../layout/Header.svelte';
	import BannerSection from "../layout/BannerSection.svelte";

	import FaqSection from '../layout/FaqSection.svelte';
	import mainfaqList from '../data/faq/landingFaqList';
	import ngoFaqList from '../data/faq/ngoFaqList';
	import businessFaqList from '../data/faq/businessFaqList';
	import volounteersFaqList from '../data/faq/volunteerFaqList';
	import startupsFaqList from '../data/faq/startupsFaqList';
	import workspaceFaqList from '../data/faq/workspaceFaqList';
	import SupportSection from '../layout/SupportSection.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	import WeDoForBlock from '../components/WeDoForBlock.svelte';
</script>

<svelte:head>
	<title>ITingo - FAQ</title>
</svelte:head>

<Header />
<BannerSection bgImg='/images/faq/faq-bg.svg'/>
<SupportSection bgClass='bg-lightYellow'>
	<svelte:fragment slot="weDoFor">
		<WeDoForBlock />
	</svelte:fragment>
</SupportSection>
<FaqSection bgImgClass='faq-bg-main' title='Pytania i odpowiedzi: sprawy ogólne' faqList={mainfaqList}/>
<FaqSection bgImgClass='faq-bg-ngo' title='Pytania i odpowiedzi dla NGO' faqList={ngoFaqList}/>
<FaqSection bgImgClass='faq-bg-partners' title='Pytania i odpowiedzi dla sponsorów i partnerów' faqList={businessFaqList}/>
<FaqSection bgImgClass='faq-bg-volunteers' title='Pytania i odpowiedzi dla wolontariuszy' faqList={volounteersFaqList}/>
<FaqSection bgImgClass='faq-bg-startups' title='Pytania i odpowiedzi dla startupow' faqList={startupsFaqList}/>
<FaqSection bgImgClass='faq-bg-workspace' title='Pytania i odpowiedzi o workspace' faqList={workspaceFaqList}/>

<ContactSection />

<style>
    
</style>
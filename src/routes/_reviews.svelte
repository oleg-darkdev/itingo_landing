<script>
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
	import faqList from '../data/landing/faq/ngoFaqList';
	import SupportSection from '../layout/landing/SupportSection.svelte';
	
</script>

<svelte:head>
	<title>Referencje o ITingo</title>
</svelte:head>

<!-- anchor: Feedback block for bussines -->

<!-- anchor: Feedback block for ngo -->

<!-- anchor: Feedback block for volunteers -->

<SupportSection bgClass='bg-gray-200'/>

<FaqSection {faqList}/>

<ContactSection />
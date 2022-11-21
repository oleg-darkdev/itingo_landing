<script>
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
	import faqList from '../data/faq/ngoFaqList';
	import SupportSection from '../layout/SupportSection.svelte';
	
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
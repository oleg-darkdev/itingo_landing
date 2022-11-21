<script>
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
	import OurFamily from '../layout/landing/ngo/OurFamily.svelte';
	import SupportSection from '../layout/landing/SupportSection.svelte';
	import ClientsSection from '../layout/landing/main/ClientsSection.svelte';
	import WeDoForBlock from '../components/landing/WeDoForBlock.svelte';
// ../data/landing/ngo/partnersList
	import partnersList from '../data/landing/ngo/partnersList';
	import faqList from '../data/landing/faq/ngoFaqList';
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>

<ClientsSection> <!-- yellow -->
	<svelte:fragment slot="weDoFor">
		<WeDoForBlock />
	</svelte:fragment>
</ClientsSection>

<!-- 
    1. sponsors
    2. bussines partnewrs
    3. ngp partners
    4. volonteers
    5. startups
 -->
{#each partnersList as member}
	<OurFamily {member} anchor='partners'/>
{/each}

<SupportSection />

<a id="faq" ></a>
<FaqSection {faqList}/>

<ContactSection />
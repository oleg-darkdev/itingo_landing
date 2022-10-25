<script>
	import { Button  } from "flowbite-svelte";
	import HelloSection from '../layout/landing/HelloSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';

	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';
	import workTypes from '../data/ngo/workTypes';
	import faqList from '../data/ngo/ngoFaqList';

	
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>


<a id="volunteer" ></a>
<HelloSection>
	<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
</HelloSection>

{#each workTypes as typeWork}
	<TypesOfWorks {typeWork}/>
{/each}

<StepsSection />

<ImpactSection />

<OurFamilySection />

<a id="faq" ></a>
<FaqSection {faqList}/>

<ContactSection />
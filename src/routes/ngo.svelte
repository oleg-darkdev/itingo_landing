<script>
	import { Button  } from "flowbite-svelte";
	import HelloSection from '../layout/landing/HelloSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';

	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';

	


</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>



<HelloSection>
	<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
</HelloSection>

<TypesOfWorks />

<StepsSection />

<ImpactSection />

<OurFamilySection />

<FaqSection />

<ContactSection />
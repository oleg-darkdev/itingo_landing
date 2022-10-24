<script>
	import { Button  } from "flowbite-svelte";
	import HelloSection from '../layout/landing/HelloSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';

	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';


	let typesWork = [
		{
			bgImage: '/images/ngo/bg/design-bg.svg',
			title: 'Design',
			description: ['', ''],
			examples: ['', '', '', ''],
			align: 'start'
		},
		{
			bgImage: '/images/ngo/bg/projecting-bg.svg',
			title: 'Projecting',
			description: ['', ''],
			examples: ['', '', '', ''],
			align: 'end'
		},
		{
			bgImage: '/images/ngo/bg/security-bg.svg',
			title: 'Security',
			description: ['', ''],
			examples: ['', '', '', ''],
			align: 'start'
		},
		{
			bgImage: '/images/ngo/bg/seo-bg.svg',
			title: 'Seo',
			description: ['', ''],
			examples: ['', '', '', ''],
			align: 'end'
		},
		{
			bgImage: '/images/ngo/bg/server-bg.svg',
			title: 'Server',
			description: ['', ''],
			examples: ['', '', '', ''],
			align: 'start'
		},
		{
			bgImage: '/images/ngo/bg/site-bg.svg',
			title: 'Site',
			description: ['', ''],
			examples: ['', '', '', ''],
			align: 'end'
		},
		{
			bgImage: '/images/ngo/bg/social-bg.svg',
			title: 'Social Media',
			description: ['', ''],
			examples: ['', '', '', ''],
			align: 'start'
		}
	]
</script>

<svelte:head>
	<title>ITingo dla NGO</title>
</svelte:head>



<HelloSection>
	<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
</HelloSection>

{#each typesWork as typeWork}
	<TypesOfWorks {typeWork}/>
{/each}

<StepsSection />

<ImpactSection />

<OurFamilySection />

<FaqSection />

<ContactSection />
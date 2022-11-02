<script>
	import BannerSection from "../layout/BannerSection.svelte";
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/ContactSection.svelte';

	import benefits from '../data/volunteers/benefits';
	import TypesOfWorks from '../layout/ngo/TypesOfWorks.svelte';
	import workTypes from '../data/ngo/workTypes';
	import faqList from '../data/volunteers/volunteerFaqList';
	import dataForTimeline from '../data/volunteers/dataForTimeline';
	
</script>

<svelte:head>
	<title>ITingo dla wolontariusze</title>
</svelte:head>

<BannerSection />

<a id="start" ></a>
<StepsSection text='Zostań wolontariuszem i rozpocznij swoją podróż w IT' {dataForTimeline}>
	<!-- <svelte:fragment slot="block">

	</svelte:fragment> -->
</StepsSection>
{#each benefits as benefit}
	<TypesOfWorks typeWork={benefit}/>
{/each}


<a id="work" ></a>
<section style="background-image: url('/images/ngo/work_banner-bg.svg');" class="banner items-center  w-full  flex flex-col justify-center">
<!--  add blocks inside -->
</section>

{#each workTypes as typeWork}
	<TypesOfWorks {typeWork}/>
{/each}



<OurFamilySection />

<a id="faq" ></a>
<FaqSection {faqList}/>

<ContactSection />


<style>
	
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.banner {
			background-size: 100%; 
			margin-bottom: 10px;
			height: auto;
			background-size: cover;
		}
	}

</style>
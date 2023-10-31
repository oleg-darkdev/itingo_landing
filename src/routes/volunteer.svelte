<script>
	import Header from '../layout/landing/Header.svelte';
	import BannerSection from "../layout/landing/BannerSection.svelte";
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/landing/FaqSection.svelte';
	import ContactSection from '../layout/landing/ContactSection.svelte';
	import FeedbackSection from "../layout/landing/FeedbackSection.svelte";
	import WorkBannerSection from '../layout/landing/ngo/WorkBannerSection.svelte';
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import SupportSection from '../layout/landing/SupportSection.svelte';
	import WeDoForBlock from '../components/landing/WeDoForBlock.svelte';

	import benefits from '../data/landing/volunteers/benefits';
	import TypesOfWorks from '../layout/landing/ngo/TypesOfWorks.svelte';
	import workTypes from '../data/landing/ngo/workTypes';
	import faqList from '../data/landing/faq/volunteerFaqList';
	import dataForTimeline from '../data/landing/volunteers/dataForTimeline';
</script>

<svelte:head>
	<title>ITingo dla wolontariusze</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/volunteer/volunteers_banner_bg.svg'/>

<a id="start" ></a>
<StepsSection text='Zostań wolontariuszem i rozpocznij swoją podróż w IT' {dataForTimeline}>
	<svelte:fragment slot="weDoFor">
		<WeDoForBlock />
	</svelte:fragment>
</StepsSection>

<!-- <ImpactSection /> -->
<SupportSection />

<div class="w-full bg-lightYellow lg:p-20 md:p-20 p-6">
	<h2 class="lg:w-6/12 md:w-8/12 w-full text-center lg:text-6xl text-5xl text-viol font-black">
		Co oferujemy IT wolontariuszom 
	</h2>
</div>

{#each benefits as benefit}
	<TypesOfWorks typeWork={benefit} btnLink='https://forms.gle/HopVuyRc8i3zi5YV7'/>
{/each}


<a id="work" ></a>
<WorkBannerSection title='Jakie wyzwania pojawiają się w projektach dla NGO'/>

{#each workTypes as typeWork}
	<TypesOfWorks {typeWork}/>
{/each}



<OurFamilySection />

<!-- <FeedbackSection /> -->

<a id="faq" ></a>
<FaqSection itle='Pytania i odpowiedzi dla wolontariuszy' bgImgClass='faq-bg-volunteers' {faqList}/>

<ContactSection />



<style>
	
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
	.banner {
			display:none;
		}
	}

</style>
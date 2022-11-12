<script>
	import BannerSection from "../layout/BannerSection.svelte";
	import FaqSection from '../layout/FaqSection.svelte';
	import Header from '../layout/Header.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	import TrelloBoardSection from '../layout/workspace/TrelloBoardSection.svelte';
	
	import faqList from '../data/faq/landingFaqList';
	import Description from "../components/resources/Description.svelte";
	import Presentation from "../components/resources/Presentation.svelte";
	import Visitecard from "../components/resources/Visitecard.svelte";
	import Logotypes from "../components/resources/Logotypes.svelte";
</script>


<svelte:head>
	<title>ITingo - resources</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/resources/banner_resources-bg.svg'/>

<section class="flex flex-col bg-viol lg:p-20 p-2 items-center ">
	<Description />

	<div class="flex flex-row w-full flex-wrap justify-around ">
		<Visitecard />

		<Logotypes />
	</div>
</section>

<Presentation />

<section class="flex items-center flex-col lg:p-20 p-4 bg-lightYellow" >
	<TrelloBoardSection boardLink='https://trello.com/b/2AJf3hCu.html'>
        <h2 class="lg:w-10/12 w-full m-8 text-center lg:text-6xl text-4xl text-viol font-bold " slot='title'>
            Może znajdziesz coś dla siebie na publicznej tablicy projektu
        </h2> 
	</TrelloBoardSection>
</section>



<FaqSection title='Pytania i odpowiedzi: sprawy ogólne' {faqList} bgImgClass='faq-bg-main'/>

<ContactSection />

<style>
    section {
		min-height: 100vh;
		height: auto;
	}
</style>
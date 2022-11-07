<script>
	import BannerSection from "../layout/BannerSection.svelte";
	// import FaqSection from '../layout/FaqSection.svelte';
	import Header from '../layout/Header.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	
	
	// import faqList from '../data/faq/landingFaqList';
	import { Avatar } from "flowbite-svelte"
	import { Button } from 'flowbite-svelte';
</script>


<svelte:head>
	<title>ITingo - resources</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/resources/banner_resources-bg.svg'/>

<section class="flex flex-col bg-viol p-20">


<div class="flex flex-row w-full flex-wrap justify-around ">
	<div class="w-3/12  flex  flex-col border-2 items-center border-viol rounded-xl h-auto pr-4 pl-4 pb-4 pt-2 bg-lightGray">
		<span class="text-center text-3xl text-viol font-black mb-4">Wizytówka</span>
		<img src="/images/resources/bussines_card.svg" alt="Visite card" class="visite-card-wrap rounded-xl mb-6  bg-lightYellow  ">

		<Button size="xl" style="background-color: #4A148C;">Pobranie</Button>
	</div>

	<div class="w-7/12  flex  flex-col justify-center items-center logotypes border-2 border-viol rounded-xl h-auto pr-4 pl-4 pb-4 pt-2 bg-lightGray">

			<h2 class="text-center text-3xl text-viol font-black mb-4">Logotypy</h2>

			<div class="flex flex-wrap flex-row w-full justify-between mb-10">
				<div class="flex-row flex-wrap w-full flex justify-between mb-10">			
					<div class="icons-wrap mb-8 ">
						<h3 class=" text-center text-2xl text-viol font-black mb-4">Znaki</h3>
						<div class="flex flex-row flex-wrap justify-between ">
							<Avatar class="mr-4 bg-lightGray " src="/images/resources/logo_white.svg" rounded size="xl" />
							<Avatar class="mr-4" src="/images/resources/logo_viol.svg" rounded size="xl" />
							<Avatar src="/images/resources/logo_yellow.svg" rounded size="xl" />
						</div>
					</div>
					<div class="pr-5 pl-6 pb-6 flex justify-start flex-col colours  h-auto  bg-lightGray">
						<h2 class="w-full text-center text-3xl text-viol font-black mb-1">Kolory</h2>
						<div class="flex flex-col flex-wrap items-start ">
							<div class="flex flex-row flex-wrap items-center">
								<div class="rounded-xl m-2 h-10 w-10 bg-viol "/> 
								<span class="text-4xl text-viol font-bold">#4B158B</span> 
							</div>
							<div class="flex flex-row flex-wrap items-center">
								<div class="rounded-xl m-2 h-10 w-10 bg-lightYellow "/> 
								<span class="text-4xl text-viol font-bold">#FEC700</span> 
							</div>
							<div class="flex flex-row flex-wrap items-center">
								<div class="rounded-xl m-2 h-10 w-10 bg-white "/> 
								<span class="text-4xl text-viol font-bold">#FFFFFF</span> 
							</div>
							
						</div>
					</div>
				</div>
				<div class="logo-wrap w-full">
				<h3 class=" text-center text-2xl text-viol font-black mb-4">Logotypy</h3>
				<div class="flex flex-row flex-wrap  justify-between ">
					<div class="rounded-xl h-32 w-64 bg-logos bg-lightYellow logos-viol "/>
					<div class="rounded-xl h-32 w-64 bg-logos bg-viol logos-yellow "/>
					<div class="rounded-xl h-32 w-64 border-2 border-white bg-logos logos-white "/>
				</div>
			</div>
			</div>
			<Button size="xl" class="w-6/12" style="background-color: #4A148C;">Pobranie</Button>

	</div>

</div>
</section>

<!-- <FaqSection title='Pytania i odpowiedzi: sprawy ogólne' {faqList} bgImgClass='faq-bg-main'/> -->
<ContactSection />

<style>
	.visite-card-wrap {
		height: 510px;
		width: 280px;
		
	}
    section {
		min-height: 100vh;
		height: auto;

	}
	.bg-logos, .bg-icons {
		background-repeat: no-repeat;
		background-size: contain; 
		background-position: center;
	}
	.icon-white {
		background-image: url(/images/resources/logo_white.svg);
	
	}
	.icon-viol {
		background-image: url(/images/resources/logo_viol.svg);
	
	}
	.icon-yellow {
		background-image: url(/images/resources/logo_yellow.svg);
	
	}

	.logos-white {
		background-image: url(/images/resources/logo_text_white.svg);
	
	}
	.logos-viol {
		background-image: url(/images/resources/logo_text_viol.svg);
	
	}
	.logos-yellow {
		background-image: url(/images/resources/logo_text_yellow.svg);
	
	}
</style>
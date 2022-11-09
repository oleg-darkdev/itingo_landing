<script>
	import BannerSection from "../layout/BannerSection.svelte";
	// import FaqSection from '../layout/FaqSection.svelte';
	import Header from '../layout/Header.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	
	
	// import faqList from '../data/faq/landingFaqList';
	import { Avatar, Card, Button  } from "flowbite-svelte";
	import socialItingoLinks from '../data/socialItingoLinks';
</script>


<svelte:head>
	<title>ITingo - resources</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/resources/banner_resources-bg.svg'/>



<section class="flex flex-col bg-viol lg:p-20 p-2 items-center ">
	<a 
	    data-aos="fade-up"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="false"
		data-aos-mirror="true"
		style="height: auto" class="mb-6 card lg:w-6/12 md:w-8/12 flex flex-col items-center bg-lightYellow   shadow-md text-viol rounded-lg    p-6">
		<h1 class="mb-2 text-5xl text-center font-bold tracking-tight text-viol dark:text-white">
			<span style="letter-spacing: .1rem;" class="text-viol text-stantley text-6xl">ITingo</span> całkowicie otwarta
		</h1> 
		<p class="m-2 text-base text-viol  font-normal text-violDark ">Wszystkie projekty tworzone przez naszą społeczność są open source i dostępne dla każdego
	</p>
		<p class="m-2 text-base text-viol font-normal text-violDark ">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	</p>
	<div class="social-opensource-container ">
        <a target="_blank" href="{socialItingoLinks.trello}"><i class="hover:bg-gray-100 icon-trello rounded-xl p-4 fb "></i></a>
        <a target="_blank" href="{socialItingoLinks.github}"><i class="hover:bg-gray-100 rounded-xl p-4 icon-github gh "></i></a>

    </div>
	</a>

	<div class="flex flex-row w-full flex-wrap justify-around ">
	<div    
		data-aos="fade-down"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="false"
		data-aos-mirror="true"
		class="lg:w-3/12 md:w-6/12 w-12/12 flex  flex-col border-2 items-center border-viol rounded-xl h-auto lg:mb-0 lg:mt-0 mb-6 mt-6 pr-4 pl-4 pb-4 pt-2 bg-lightGray">
		<span class="text-center text-3xl text-viol font-black mb-4">Wizytówka</span>
		<img src="/images/resources/bussines_card.svg" alt="Visite card" class="visite-card-wrap rounded-xl mb-6  bg-lightYellow  ">

		<Button href="https://github.com/oleg-darkdev/itingo/blob/master/static/images/resources/bussines_card.svg" size="xl" style="background-color: #4A148C;">Pobranie</Button>
	</div>

	<div class="lg:w-7/12 w-12/12 flex  flex-col justify-center items-center logotypes border-2 border-viol rounded-xl h-auto pr-4 pl-4 pb-4 pt-2 bg-lightGray">

			<h2 class="text-center text-3xl text-viol font-black mb-4">Logotypy</h2>

			<div class="flex flex-wrap flex-row w-full justify-between mb-10">
				<div class="flex-row flex-wrap w-full flex lg:justify-between md:justify-between justify-center mb-10">			
					<div class="icons-wrap mb-8 ">
						<h3 class=" text-center text-2xl text-viol font-black mb-4">Znaki</h3>
						<div class="flex flex-row flex-wrap lg:justify-between md:justify-between justify-center">
							<Avatar class="m-2 bg-lightGray " src="/images/resources/logo_white.svg" rounded size="xl" />
							<Avatar class="m-2" src="/images/resources/logo_viol.svg" rounded size="xl" />
							<Avatar class="m-2" src="/images/resources/logo_yellow.svg" rounded size="xl" />
						</div>
					</div>
					<div class="pr-5 pl-6 pb-6 flex justify-start  flex-col colours  h-auto  bg-lightGray">
						<h2 class="w-full text-center text-3xl text-viol font-black mb-1">Kolory</h2>
						<div class="flex flex-col flex-wrap items-start">
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
				<div class="flex flex-row flex-wrap  justify-center">
					<div class="m-2 rounded-xl h-32 w-64 bg-logos bg-lightYellow logos-viol "/>
					<div class="m-2 rounded-xl h-32 w-64 bg-logos bg-viol logos-yellow "/>
					<div class="m-2 rounded-xl h-32 w-64 border-2 border-white bg-logos logos-white "/>
				</div>
			</div>
			</div>
			<Button size="xl" href="https://github.com/oleg-darkdev/itingo/tree/master/static/images/resources" class="w-6/12" style="background-color: #4A148C;">Pobranie</Button>

	</div>

</div>
</section>

<section style="height: auto; min-height: 450px;" class="flex flex-coll w-full flex-wrap lg:p-20 pt-6 pb-6 pr-2 pl-2">
	<h2 style="max-height: 100px;" class="w-full text-center lg:text-6xl md:text-6xl text-4xl text-viol font-black mb-4">Prezentacja dla NGO</h2>

	<iframe 
		    data-aos="flip-up"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="false"
		data-aos-mirror="true"
		src="https://www.slideshare.net/slideshow/embed_code/key/MFCU5wnY9kGwOv?hostedIn=slideshare&page=upload" style=" " class="presentation-wrap mb-6 rounded-xl lg:w-9/12 md:w-9/12 w-full bg-viol " scrolling="yes"></iframe>
	<Button size="xl" class="lg:w-6/12 md:w-6/12 w-11/12 h-12" style="background-color: #4A148C;" href='https://www.slideshare.net/44Hackerspace/decangopptx'>Ściągnij prezentację</Button>
</section>


<!-- <FaqSection title='Pytania i odpowiedzi: sprawy ogólne' {faqList} bgImgClass='faq-bg-main'/> -->
<ContactSection />

<style>
	.social-opensource-container {
		font-size: 5em;
		height: 60px;
		max-width: 360px;
		margin-bottom: 50px;
	}
.presentation-wrap {
			height: 90vh;
			min-height: 300px;
		}

	@media (min-device-width: 760px) and (max-device-width: 1024px) {
		.presentation-wrap {
			height: 60vh;
			
		}
	}
	@media (min-device-width: 320px) and (max-device-width: 760px) {
		.presentation-wrap {
			height: 200px;
		}
	}
	.visite-card-wrap {
		min-height: 510px;
		min-width: 280px;
		
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
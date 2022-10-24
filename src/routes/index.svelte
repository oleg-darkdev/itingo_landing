<script>
	import HelloSection from '../layout/HelloSection.svelte';
	import WeDoFor from '../layout/WeDoFor.svelte';
	import OurClientsSection from '../layout/OurClientsSection.svelte';
	import Timeline from '../components/landing/Timeline.svelte';
	import Registration from '../layout/Registration.svelte';
	import Impact from '../components/landing/Impact.svelte';
	import Faq from '../components/landing/Faq.svelte';

	import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>ITingo</title>
</svelte:head>



<section class="items-center hello bg-lightYellow w-full mb-12">
	<h1 class="w-8/12 text-center text-7xl text-white font-black">Witamy w domu IT wolontariatu</h1>
</section>

<section class="mb-8">
	<HelloSection />	
</section>

<section class="pb-12 pt-20 flex bg-lightYellow justify-center flex-col clients w-full" id="about">
	<WeDoFor />
	<OurClientsSection />
</section>

<section class="pt-12 w-full flex flex-col items-center" id="steps">
	<div class="w-8/12 justify-center flex-col"> 
		<h2 class="w-full m-8 text-center text-6xl text-viol font-bold ">Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach</h2>
		<Timeline />
		
	</div>
	<Registration /> 
</section>

<section class="pt-12 pb-20 bg-viol flex flex-col items-center " id="impact">
	<h2 class="w-full m-8 text-center text-6xl text-lightYellow font-bold ">Już wykonane</h2>
	<Impact />
</section>


<section class="our-family justify-start content-center pr-20" id="family">
	<div style="" class="lg:w-5/12 md:w-12/12 sm:w-12/12 bg-white flex justify-end items-center">
		<div style="min-width: 320px;" class="flex flex-col items-center">
			<h2 class=" m-8  text-6xl text-lightYellow font-bold ">NASZA <br> NON-PROFIT <br> RODZINA</h2>
			<Button size="xl" class="w-10/12" color="purple">Czytać więcej</Button>
		</div>
	</div>
</section>

<section style="" class="faq pb-12 pt-20 w-full items-center flex-col flex  " id="faq">
	<div style="height: 70vh; margin-bottom: -100px;" class="w-full">

	</div>
	<div class="bg-viol  w-6/12 rounded  flex-col flex items-center ">
		<div class="w-full px-5 p-5 shadow-md rounded-lg ">
			<Faq />
		</div>
	</div>
</section>

<section id="contact" class="pb-12 pt-20 contact bg-lightYellow flex items-center ">
	<div style="height: 350px;" class="w-4/12 px-5 p-5 flex-col flex items-center shadow-md rounded-lg bg-white">
		Kontakt
	</div>

</section>

<style>
	.hello {
		height: 300px;
	}

	.clients {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/clients/clients-bg.svg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto;
	}

	.our-family {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/our-family.svg);
		background-repeat: no-repeat;
		background-position: 75% 25% ;
		background-size: auto;
		background-attachment: fixed;
	}


	.faq {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/faq-bg.svg);
		background-repeat: no-repeat;
		background-position: 50% 0%;
		background-size:60%; 
	}

	.contact {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/contact-bg.svg);
		background-repeat: no-repeat;
		background-size: cover; 
		background-attachment: fixed;
		background-position: center;
	}
</style>


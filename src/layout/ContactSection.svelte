<script>
	import SocialMedia from "./contact/SocialMedia.svelte";
	import MailContact from "./contact/MailContact.svelte";
	import Coordinator from "./contact/Coordinator.svelte";
</script>

<section id="contact" class="pb-12 pt-20 contact bg-lightYellow flex items-center ">
	<div style="min-height: 350px;" class="lg:w-5/12 md:w-7/12 md:pb-6 sm:max-w-max lg:p-8 flex-col flex items-center shadow-md lg:rounded-lg md:rounded-lg bg-viol">
		<h2 class="w-full text-center text-5xl text-white font-black">Kontakt z nami</h2>
		<p class="m-2 font-bold text-center w-8/12 leading-tight mb-2 text-white">
			Prosimy! Zanim skontaktujesz się z nami, przestudiuj tęn   
		
			  <a href="/" class="inline-flex items-center text-lightYellow hover:underline">
				listę pytań i odpowiedzi. 
				<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg> -->
			</a> 
		</p>
		<p class="m-2 font-bold text-center w-8/12 leading-tight mb-2 text-white">
			Być może znajdziesz tam odpowiedź na swoje pytanie.
		</p>
		<!-- <div class="p-0 m-0" 
		data-aos="zoom-in-up"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true"> -->
		<SocialMedia />
		<MailContact />
		<!-- </div> -->
		<Coordinator />
	</div>

</section>



<style>
    .contact {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/bg/contact-bg.svg);
		background-repeat: no-repeat;
		background-size: cover; 
		background-attachment: fixed;
		background-position: center;
	}
</style>
<script>
	import SocialMedia from "../contact/SocialMedia.svelte";
	import MailContact from "../contact/MailContact.svelte";
	import Coordinator from "../contact/Coordinator.svelte";
</script>

<section id="contact" class="pb-12 pt-20 contact bg-lightYellow flex items-center ">
	<div style="min-height: 350px;" class="lg:w-4/12  sm:max-w-max lg:p-5 sm:p-1 flex-col flex items-center shadow-md rounded-lg bg-viol">
		<h2 class="w-full text-center text-5xl text-white font-black">Kontakt z nami</h2>

		<SocialMedia />
		<MailContact />
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
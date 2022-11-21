<script>
	import OurClientsSection from '../../components/landing/OurClientsSection.svelte';
	import VoivodeshipsClients from '../../components/VoivodeshipsClients.svelte';
</script>


<section class="pb-12 pt-20 flex bg-lightYellow justify-center items-center flex-col clients w-full" id="about">
	<slot name="weDoFor">

	</slot>
	<OurClientsSection />
	<VoivodeshipsClients />
</section>


<style>
    .clients {
		min-height: 100vh;
		height: auto;

	}
</style>
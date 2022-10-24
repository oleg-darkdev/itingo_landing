<script>
    import WeDoFor from './WeDoForBlock.svelte';
	import OurClientsSection from '../../components/landing/OurClientsSection.svelte';
</script>


<section class="pb-12 pt-20 flex bg-lightYellow justify-center flex-col clients w-full" id="about">
	<WeDoFor />
	<OurClientsSection />
</section>


<style>
    .clients {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/bg/clients-bg.svg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto;
	}

</style>
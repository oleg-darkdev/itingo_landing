<script>
    import Faq from '../../components/landing/Faq.svelte';
</script>

<section style="" class="faq pb-12 pt-20 w-full items-center flex-col flex  " id="faq">
	<div style="height: 70vh; margin-bottom: -100px;" class="w-full">

	</div>
	<div class="bg-viol  w-6/12 rounded  flex-col flex items-center ">
		<div class="w-full px-5 p-5 shadow-md rounded-lg ">
			<Faq />
		</div>
	</div>
</section>


<style>
    .faq {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/landing/bg/faq-bg.svg);
		background-repeat: no-repeat;
		background-position: 50% 0%;
		background-size:60%; 
	}

</style>
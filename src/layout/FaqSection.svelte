<script>
    import Faq from '../components/landing/Faq.svelte';
	
	export let faqList;
</script>

<section style="height: auto;" class="faq pb-12 pt-20 w-full items-center flex-col flex  " id="faq">
	<div style="" class="empty-block w-full h-auto">

	</div>
	<div class="bg-viol  lg:w-6/12 md:w-8/12 sm:w-6/12 rounded  flex-col flex items-center ">
		<div class="w-full px-5 p-5 shadow-md rounded-lg ">
			<Faq {faqList}/>
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

	.empty-block {
		max-height: 70vh;
		margin-bottom: -100px;
	}

	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.empty-block {
			max-height: 70vh;
			margin-bottom: 20px;
		}

	}
</style>
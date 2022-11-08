<script>
    import Faq from '../components/faq/Faq.svelte';
	
	export let faqList, title = 'Pytania i odpowiedzi', bgImgClass;
</script>

<section style="height: auto;" class="faq-bg {bgImgClass} pb-12 pt-20 w-full items-center flex-col flex  " id="faq">

	<div  class="empty-block w-full">

	</div>
	<div class="bg-viol   lg:w-6/12 md:w-10/12 sm:w-12/12 rounded  flex-col flex items-center ">
		<div class="w-full px-5 p-5 shadow-md rounded-lg ">
			<h2 class="w-full text-center text-4xl text-white font-black mb-8">
				{title} 
			</h2>

			<Faq {faqList}/>
		</div>
	</div>
</section>


<style>


	.faq-bg-volunteers { 
		background-image: url(/images/faq/faq-vols.svg);
	}
	.faq-bg-ngo {
		background-image: url(/images/faq/faq-ngo.svg);
	}
	.faq-bg-partners {
		background-image: url(/images/faq/faq-partners.svg);
	}
	.faq-bg-startups {
		background-image: url(/images/faq/faq-startups.svg);
	}
	
	.faq-bg-main {
		background-image: url(/images/faq/faq-main.svg);
	}

	.empty-block {
		max-height: 70vh;
		height: 60vh;
	}

	@media (min-device-width: 1024){
		.faq-bg {
			min-height: 100vh;
			height: auto;
			background-repeat: no-repeat;
			background-position: 50% 0%;
			background-size:60%; 
		}
	}

	@media (min-device-width: 760px) and (max-device-width: 1024px) {
		.empty-block {
			height: 45vh;
		}
		.faq {
			background-size: 100%; 
			margin-bottom: 10px;
		}
	}
	@media (min-device-width: 320px) and (max-device-width: 760px) {
		.empty-block {
			height: 17vh;
		}
	}
</style>
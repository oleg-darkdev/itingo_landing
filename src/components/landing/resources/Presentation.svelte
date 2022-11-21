<script>
    import { Button  } from "flowbite-svelte";
</script>


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


<style>
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
</style>
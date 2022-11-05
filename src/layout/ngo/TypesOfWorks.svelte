<script>
    import { Button } from 'flowbite-svelte';
	import WorkList from '../../components/ngo/WorkList.svelte';

	export let typeWork;
</script>

<!-- class:active={}  -->
<section id={typeWork.anchor} style="background-position: {typeWork.align == 'start' ? 'right': 'left'}; background-image: url({typeWork.bgImage});" class="work-wrap justify-{typeWork.align} content-center " >
	<div data-aos="fade-{typeWork.align == 'start' ? 'right': 'left'}"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="false"
		data-aos-mirror="true"  style="" class="lg:w-7/12 md:w-12/12 bg-white flex justify-end items-center">
		<div 
		style="min-width: 320px;" class="pt-8 pb-8 flex flex-col items-center ">
			<h2 class=" m-8 text-6xl text-lightYellow font-bold">{typeWork.title}</h2>
			  <p class="font-normal lg:w-8/12 md:w-8/12 w-11/12 text-start leading-tight mb-2 text-viol">
  				{typeWork.description}
			</p>
			<WorkList dataAboutService={typeWork.dataAboutService}/>
			<Button href='/form' size="xl" class="lg:w-4/12" color="purple">Zgłosić projekt</Button>
		</div>
	</div>
</section>


<style>
    .work-wrap {
		
		height: auto;
		background-repeat: no-repeat;		
		background-size: auto;
		background-attachment: fixed;
	}
	@media (min-width: 1024px) {
		.work-wrap {
			min-height: 100vh;
		}
	}
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.work-wrap {
			min-height: 60vh;
			height: auto;
		}
	}
</style>
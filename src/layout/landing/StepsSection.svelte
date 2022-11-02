<script>
    import Timeline from '../../components/landing/Steps.svelte';

	export let text, dataForTimeline;
</script>


<section class="pt-12 pb-20 w-full flex flex-col items-center" id="steps">
	<div class="lg:w-8/12 md:w-10/12 w-12/12 justify-center flex-col p-0"> 
		<h2 class="w-full mt-8 mb-8 text-center lg:text-6xl md:text-6xl text-3xl  text-viol font-bold ">{text}</h2>
		<Timeline {dataForTimeline}/>
	</div>
	<slot name="block">
		
	</slot>
</section>
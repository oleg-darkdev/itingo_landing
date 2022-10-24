<script>
    import Timeline from '../../components/landing/Timeline.svelte';
	import Registration from './RegistrationBlock.svelte';
</script>


<section class="pt-12 w-full flex flex-col items-center" id="steps">
	<div class="lg:w-8/12 md:w-10/12  justify-center flex-col p-0"> 
		<h2 class="w-full mt-8 mb-8 text-center text-3xl sm:text-lg text-viol font-bold ">Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach</h2>
		<Timeline />
		
	</div>
	<Registration /> 
</section>
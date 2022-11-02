<script>
    import HelloSection from '../layout/landing/HelloSection.svelte';
    import SocialMedia from "../layout/contact/SocialMedia.svelte";

	export let bgImg;
</script>


<section style="background-image: url({bgImg});" class="banner items-center  w-full  flex flex-col justify-center">
	<div style="" 
		
		 class="h-auto p-2 bg-viol lg:w-5/12 md:w-6/12  w-12/12  flex flex-col lg:rounded-xl md:rounded-xl justify-center">
		<h1 class="w-full text-center lg:text-7xl md:text-6xl text-4xl text-white font-black mb-8">
			<span style="" class="text-logo-letter-spacing text-lightYellow text-stantley">ITingo</span>
			 - dom IT wolontariatu</h1>
		<SocialMedia />
	</div>

		
	<!-- куда её ? -->
	<!-- <HelloSection>
	<ButtonGroup>
		<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
		<Button size="lg" color="purple">Zostań wolontariuszem</Button>
	</ButtonGroup>
	</HelloSection> -->
</section>


<style>

	
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.banner {
			background-size: 100%; 
			margin-bottom: 10px;
			background-size: cover;
			background-position: right;
		}

		.text-logo-letter-spacing {
			letter-spacing: .3rem;
		}
	}
</style>
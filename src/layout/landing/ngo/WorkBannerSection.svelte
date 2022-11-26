<script lang="ts">
	export let title: string;
</script>

<section style="background-image: url('/images/ngo/work_banner-bg.svg');" class="banner items-center  w-full  flex flex-col justify-center">

</section>

<div class="w-full bg-lightYellow lg:p-20 md:p-20 p-6">
	<h2 class="lg:w-6/12 md:w-8/12 w-full text-center lg:text-6xl text-5xl text-viol font-black">
		{title}
	</h2>
</div>

<style>
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.banner {
			display:none;
		}
	}
</style>
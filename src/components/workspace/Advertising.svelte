<script>
    export let advertising;
</script>


<section style="lg:w-full " class="lg:p-6 md:p-6 p-2">
    <a href={advertising.link}>
        <div class="lg:w-8/12 rounded-xl ads" style="background-image: url({advertising.bgImg});" />
    </a>
</section>


<style>
    @media (min-width: 1024px) {
        .ads{
            width: 1000px;
            height: 350px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
	}

	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.ads {
            display: none;
        }
	}
</style>
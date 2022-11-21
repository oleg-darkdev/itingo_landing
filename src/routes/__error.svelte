<script>
	import Header from "../layout/landing/Header.svelte";
</script>

<Header />

<div class="not-found w-full">
    <div style="height: 450px;" class="w-full flex flex-col items-center">
	<h1 style="" class="title  text-lightYellow font-bold ">404</h1>
    <p style="" class="mb-3 sub-title text-center font-normal text-lightYellow">Nie znaleziono strony</p>
    </div>
</div>


<style>
    .not-found {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/404-bg.svg);
		background-repeat: no-repeat;
		background-size: 90%; 
		background-attachment: fixed;
		background-position: center;
	}

	.title {
		font-size: 300px;
		text-align: center;
	}

	.sub-title {
		font-size: 90px; margin-top: -100px; width: 50%; min-width: 350px;
	}

	@media (min-device-width: 320px) and (max-device-width: 760px) {
		.title {
			font-size: 220px;
			margin-bottom: 50px;
		}

		.sub-title {
			font-size: 70px;  width: 50%; min-width: 350px;
		}
	}
</style>
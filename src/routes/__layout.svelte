<script>
    import '../app.css';  
    import Footer from '../layout/Footer.svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});


</script>

<slot />
<Footer />

<style>
	:global(section) {
		/* margin: 0 0 80px 0; */
        /* padding: 50px 0 0 0; */
	}
	:global(.justify-center, section)  {
        display: flex;
        justify-content: center;
    }
    :global(.row) {
        display: flex;
        flex-direction: row;
    }
	:global(column) {
        display: flex;
		flex-direction: column;
	}

    :global(.bg) {
        background-repeat: no-repeat;
        background-position: center;
    }

	:global(body, html) {
		overflow-x: clip; 
		height: 100%;
		margin: 0;
		padding: 0;
        scroll-behavior: smooth;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
	}
	:global(body::-webkit-scrollbar) {
		display: none; /* Chrome, Safari and Opera  */
	}

    :global(.banner) {
		min-height: 100vh;
		height: auto;
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto;
		background-attachment: fixed;
	}
    
    :global(nav) {
        background-color: #4A148C !important;
    }
    :global(nav ul li a) {
        color: #ffffff !important;
    }

    :global(.text-stantley) {
		font-family: 'Stanley';
	}

	@font-face { 
		font-family: 'Stanley';  
		font-style: normal; 
		src: url(/fonts/stanley.ttf);
    } 


    
</style>

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
		scroll-behavior: smooth;
		-ms-overflow-style: none; 
  		scrollbar-width: none; 
		overflow-x: clip; 

		height: 100%;
		margin: 0;
		padding: 0;

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

	.logo-partners:hover {
		
	}

	/* 
		Social icons
	*/
	:global(.fb) {
	color: #ea4c89;
	}

	:global(.tw) {
	color: #09AEEC;
	}

	:global(.tr) {
	color: #ea4c89;
	}

	:global(.in) {
	color: #FFEB3B;
	}

	:global(.dr) {
	color: #ea4c89;
	}

	:global(.ln) {
	color: #8BC34A;
	}

	:global(.gh) {
	color: #fff;
	}
    
	:global(.wrap-social-container) {
	width: 100%;
	text-align: center;
	}

	:global(.social-animation-container) {
	font-size: 2.5em;
	height: 60px;
	max-width: 360px;
	overflow: hidden;
	border-bottom: 1px solid #abc;
	}

	:global(.soc-icon) {
	position: relative;
	top: 25px;
	margin: 0 10px;
	transition: all 100ms cubic-bezier(0.42, 0, 0.58, 1);
	/* ease-in-out */
	}
	:global(.soc-icon:hover) {
	top: 5px;
	}
</style>

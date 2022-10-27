<script>
    import '../app.css';  
    import Header from '../layout/Header.svelte';
    import Footer from '../layout/Footer.svelte';
</script>

<Header />
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
		height: 100%;
		margin: 0;
		padding: 0;
        
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

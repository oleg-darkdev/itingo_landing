<script>
    import Header from '../layout/Header.svelte';
</script>

<Header />
<slot />


<style>
	:global(section) {
		margin-bottom: 30px;
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
</style>

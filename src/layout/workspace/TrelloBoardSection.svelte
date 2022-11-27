<script>
    export let boardLink;
</script>


  <!-- <h2 class="w-full m-8 text-center text-6xl text-viol font-bold ">
		Nasza tablica robocza dla  projektów organizacji pozarządowych
    <span style="" class="text-logo-letter-spacing text-viol text-stantley">ITingo</span>
    </h2> -->

<slot name="title"> 
    
</slot>
<iframe loading="lazy" class="lg:w-10/12 w-full lg:rounded-xl md:rounded-xl lg:m-12 md:m-12 m-2" src="{boardLink}">

</iframe>

<style>
    iframe {
        height: 100vh;
    }
</style>
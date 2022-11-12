<script>
    export let boardLink;
</script>


  <!-- <h2 class="w-full m-8 text-center text-6xl text-viol font-bold ">
		Nasza tablica robocza dla  projektów organizacji pozarządowych
    <span style="" class="text-logo-letter-spacing text-viol text-stantley">ITingo</span>
    </h2> -->
<slot name="title"> 
    
</slot>
<iframe class="lg:w-8/12 w-full rounded-xl " src="{boardLink}">

</iframe>


<style>
    iframe {
        height: 100vh;
    }
</style>
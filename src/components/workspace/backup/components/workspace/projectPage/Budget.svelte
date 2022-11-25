<script>

    export let report;
</script>


<a class="m-4 bg-viol rounded-lg border border-gray-200   shadow-md flex w-auto flex-col  p-4 sm:p-6 ">

    
    <div style="" class="max-w-sm">
    <div class="flex flex-col items-center">
        <h3 class="text-2xl  font-bold tracking-tight text-lightYellow ">
            Sponsorzy projektu
        </h3> 
        <div class="mb-6 flex-row flex flex-wrap">
            {#each report.sponsors as sponsor}
                <a href={sponsor.link}>
                    <img style="width: 300px; " class="logo-partners" src={sponsor.logo} alt={sponsor.title}>
                </a>
            {/each}
        </div>
    </div>
    <div class="flex flex-col items-center">
        <h3 class="text-2xl font-bold tracking-tight text-lightYellow ">
            Partnerzy projektu
        </h3> 
        <div class="flex-col flex flex-wrap justify-center">
            {#each report.partners as partner}
                <a href={partner.link}>
                    <img style="width: 200px;" class="logo-partners" src={partner.logo} alt={partner.title}>
                </a>
            {/each}
        </div>
    </div>
</div>


</a>


<style>

</style>
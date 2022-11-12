<script>

    export let bio, report;
</script>

<a class="card-about m-4 bg-viol   rounded-lg border border-gray-200  shadow-md flex max-w-sm flex-col  p-4 sm:p-6 ">
    <h3 class="text-2xl font-bold tracking-tight text-white ">
        Budżet:     
    <span class=" text-2xl font-black  tracking-tight text-lightYellow">
        {report.budget} PLN
    </span>
    </h3> 

    <h3 class=" text-2xl font-bold tracking-tight text-white ">
        Projekt: <span  class="text-lightYellow">{report.name}</span>
    </h3> 
    <p class="font-normal   text-white leading-tight ">
       <i class="icon-contacts-org icon-location-arrow mr-2"></i> localisation:    <span class="font-bold text-1xl m-1 text-lightYellow  leading-tight"> {bio.areaOfOperation}</span>
    </p>
    <a class="font-normal mb-2 text-1xl m-1 leading-tight text-white" href='/workspace/orgs/{bio.id}'>ID: <span class="text-lightYellow "> {bio.nameOrg}</span></a>


    

    <p class="font-normal mt-2 mb-2 text-white leading-tight ">
       <i class="icon-contacts-org icon-plus mr-2"></i> Dodany:    <span class="font-bold text-1xl m-1 text-lightYellow  leading-tight"> {report.datePublic}</span>
    </p>
    
    <p class="font-normal mt-2 mb-2 text-white leading-tight ">
       <i class="icon-contacts-org icon-heart mr-2"></i> Uruchomiony:    <span class="font-bold text-1xl m-1 text-lightYellow  leading-tight"> {report.dateStart}</span>
    </p>
    <p class="font-normal mt-2 mb-2 text-white leading-tight ">
       <i class="icon-contacts-org icon-check mr-2"></i> Termin:    <span class="font-bold text-1xl m-1 text-lightYellow  leading-tight"> {report.dateEnd}</span>
    </p>
    
    <p class="font-normal mt-2 mb-2 text-white leading-tight ">
       <i class="icon-dropbox icon-check mr-2"></i> Rozmiar projektu:    <span class="font-bold text-1xl m-1 text-lightYellow  leading-tight"> {report.size}</span>
    </p>

    <div class="flex-row mt-2 mb-2 flex flex-wrap justify-center">
        <a class="m-2" target="_blank" href="{report.zoom}"><i class="text-6xl icon-microphone icon"></i></a>
        <a class="m-2" target="_blank" href="{report.gitHub}"><i class="text-6xl icon-github icon"></i></a>
        <a class="m-2" target="_blank" href="{report.trelloBoard}"><i class="text-6xl icon-trello icon  "></i></a>
        <a class="m-2" target="_blank" href="{report.site}"><i class="text-6xl icon-link icon"></i></a>
    </div>
      <div class="flex-row flex flex-wrap justify-center">
    {#each bio.category as category}
    <span class="m-1 inline-flex items-center justify-center -mb-0.5 text-sm font-medium bg-lightYellow text-viol dark:bg-yellow-200 dark:text-yellow-900 rounded px-2.5 py-0.5">
        {category} 
    </span>   
     {/each}
    </div>  
</a>


<style>
    .card-about {
        max-height: 500px;
    }
    .icon {
        color: #ffffff;
    }
    .icon:hover {
        color: #FFC800;
    }
</style>
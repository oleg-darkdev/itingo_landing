<script>
    export let partners, title;
</script>


<div class="flex flex-col items-center">
    <h3 class="text-2xl  font-bold tracking-tight text-lightYellow ">
        {title}
    </h3> 
    <div class="mb-6 flex-row flex flex-wrap">
        {#each partners as partner}
            <a href={partner.link}>
                <img loading="lazy"  style="width: 200px; " class="m-2 rounded-xl logo-partners" src={partner.logo} alt={partner.title}>
            </a>
        {/each}
    </div>
</div>
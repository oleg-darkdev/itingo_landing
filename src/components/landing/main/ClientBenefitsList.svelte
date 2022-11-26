<script lang="ts">
    export let client: string[];
</script>


<div class="pl-5 flex flex-col justify-start">
    <ul class=" text-violDark max-w-md list-disc list-inside space-y-1">
        {#each client as listItem}
            <li class="text-left">
                <span class="font-semibold text-lightYellow">{listItem.colored[0]}
                </span> {listItem.defaultColour[0]}
                <span class="font-semibold text-lightYellow">{listItem.colored[1]}	
                </span> {listItem.defaultColour[1]}					
            </li> 
        {/each}
    </ul>
</div> 
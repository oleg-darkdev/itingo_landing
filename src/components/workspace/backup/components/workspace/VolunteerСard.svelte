<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Tooltip } from "flowbite-svelte"
    export let volunteerData;
</script>


<div style="min-width: 340px; min-height: 150px; height: auto;" class="m-2 flex max-w-sm flex-col  md:max-w-xl bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
    <div style="" class="w-auto h-auto ml-2 mb-0 mt-2 flex flex-row content-center">
        <Avatar src={volunteerData.avatar}  size="lg" />


        <div class="m-2 flex flex-col" role="group">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-viol">
            {volunteerData.nickName}
        </h5> 
        <div class="flex-row">
            <span style="min-width: 50px; max-width: 80px; width: auto;" class="m-4 inline-flex items-center justify-center bg-viol text-sm font-medium text-lightYellow rounded px-2.5 py-0.5">Dark </span>
        </div>

        <div style="height: 60px;" class="inline-flex shadow-sm ">
        <a  on:click={() => volunteerData.showMoreInfo = !volunteerData.showMoreInfo} style="height: 50px;" class="group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-4 py-2 text-sm text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-white dark:border-white border-l-0 first:border-l first:rounded-l-lg last:rounded-r-lg">
            <i class="{volunteerData.showMoreInfo ? 'icon-arrow-up': 'icon-arrow-down' } m-2" style="font-size: 16px;">
            </i> 
            {volunteerData.showMoreInfo ? 'Hide': 'More'}
        </a>
        <!--<Button>--> 
        <a style="height: 50px;" class="group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 first:rounded-l-lg last:rounded-r-lg">Invite 
            <i class="icon-plus m-2" style="font-size: 16px;">
            </i>
        </a>
        <!--<Button>-->
            </div>
        </div>

    </div>   
    {#if volunteerData.showMoreInfo}
    <div class="flex-col flex p-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-viol">
            {volunteerData.firstName} {volunteerData.surName} 
        </h5> 
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {volunteerData.bio}
        </p>
    </div>
    {/if}

</div>


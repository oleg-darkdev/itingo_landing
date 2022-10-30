<script>
import { Button } from 'flowbite-svelte';


export let sectionData;
</script>


<section class="workspace flex justify-center lg:p-20 pt-4 pb-4">
    <div class="lg:w-11/12 md:w-11/12 w-12/12 bg-viol lg:rounded-xl md:rounded-xl flex flex-col items-center lg:pr-4 lg:pl-4 pb-8" >
        <h2 class="m-4 mb-2  text-6xl text-center text-lightYellow font-black">{sectionData.title}</h2>
        <!-- <span class="mb-3 font-normal text-gray-700 text-center " >{sectionData.subTitle} {sectionData.howMuch}</span> -->
        <!-- <h3 class="m-4 mb-6  text-4xl text-lightYellow font-regular"></h3> -->
        
        <div class="projects-wrap bg-lightYellow w-auto h-auto w-full md:rounded-xl lg:rounded-xl  flex flex-col items-center mb-12">
           <h2 class="m-2 mb-2  text-3xl text-center text-viol font-normal">{sectionData.topTitle}</h2>
            
                <slot name="top">

                </slot>
        </div>

            <slot name="all">

            </slot>
        <Button href={sectionData.link} size="xl" color="yellow" class="w-6/12">All volunteers in this category</Button>
    </div>
</section>



<style>
    .workspace {

    }
</style>
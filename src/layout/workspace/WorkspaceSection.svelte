<script>
import { Button, ButtonGroup } from 'flowbite-svelte';


export let sectionData;
</script>



    <div class="lg:w-11/12 md:w-11/12 w-12/12 bg-viol lg:rounded-xl md:rounded-xl flex flex-col items-center pt-2 lg:pr-4 lg:pl-4 pb-8" >
        <!-- <h2 class="m-4 mb-2  text-6xl text-center text-lightYellow font-black">{sectionData.title}</h2> -->
        
        
        <!-- <span class="mb-3 font-normal text-gray-700 text-center " >{sectionData.subTitle} {sectionData.howMuch}</span> -->
        <!-- <h3 class="m-4 mb-6  text-4xl text-lightYellow font-regular"></h3> -->
        
        <div class="projects-wrap bg-lightYellow w-auto h-auto w-full md:rounded-xl lg:rounded-xl  flex flex-col items-center mb-12">
           <h2 class="m-2 mb-2  text-3xl text-center text-viol font-normal">{sectionData.topTitle}</h2>
            
                <slot name="top">

                </slot>
        </div>
                <slot name="filtre">

                </slot>

            <slot name="all">

            </slot>
        <ButtonGroup class="w-full flex justify-center ">
            <Button size="xl" color="yellow" >Złóż wniosek o projekt</Button>
            <Button href={sectionData.link}  size="xl" color="yellow" outline  class="">Wszyscy wolontariusze</Button>
        </ButtonGroup>

    </div>




<style>
    .workspace {

    }
</style>
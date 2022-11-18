<script>
  import { Radio, Toggle  } from 'flowbite-svelte'
</script>

<div class="filtre lg:w-5/12 md:w-8/12 w-10/12 lg:flex-row md:flex-row flex-col flex p-2  bg-viol rounded-xl justify-center content-center lg:border-2 md:border-2 lg:border-white md:border-white bg-purple-800">
    <div class="flex flex-col  mr-8">
        <h2 class="text-3xl text-white font-black ">Filtr wolontariuszy</h2>
        <label class="mt-1 text-sm font-medium block text-white flex items-center">
            <input type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 sr-only peer rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">
        
            <span class="mr-3 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:bg-gray-700 dark:border-gray-600 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5 relative">
            </span> 
            Wolne od projektów
        
        </label>
    </div>

    <div class="mt-2 flex flex-col">
        <Radio name="example" checked={true}>kompetencji  </Radio>
        <Radio name="example" checked={true}>aktywnośc</Radio>
        <Radio name="example" checked={true}>ocena</Radio>
        <!-- <label class="text-sm font-medium block text-white flex items-center">
            <input type="radio" value="" name="ocena" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">ocena
        </label>
        <label class="text-sm font-medium block text-white flex items-center">
            <input type="radio" value="" name="kompetencji" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">kompetencji 
        </label>
        <label class="text-sm font-medium block text-white flex items-center">
            <input type="radio" value="" name="aktywnośc" class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600">aktywnośc
        </label> -->
    </div>
</div>


<style>
    .filtre {
        min-height: 100px;
        height: auto;
        position: relative;
    }
</style>
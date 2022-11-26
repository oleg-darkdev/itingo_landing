<script>
    import { Button  } from "flowbite-svelte";
</script>

<div    
    data-aos="fade-down"
    data-aos-delay="80"
    data-aos-duration="800" 
    data-aos-once="false"
    data-aos-mirror="true"
    class="lg:w-3/12 md:w-6/12 w-12/12 flex  flex-col border-2 items-center border-viol rounded-xl h-auto lg:mb-0 lg:mt-0 mb-6 mt-6 pr-4 pl-4 pb-4 pt-2 bg-lightGray">
    <span class="text-center text-3xl text-viol font-black mb-4">Wizytówka</span>
    <img src="/images/resources/bussines_card.svg" alt="Visite card" class="visite-card-wrap rounded-xl mb-6  bg-lightYellow  ">

    <Button href="https://github.com/oleg-darkdev/itingo/blob/master/static/images/resources/bussines_card.svg" size="xl" style="background-color: #4A148C;">Pobranie</Button>
</div>


<style>
    .visite-card-wrap {
		min-height: 510px;
		min-width: 280px;
		
	}
</style>
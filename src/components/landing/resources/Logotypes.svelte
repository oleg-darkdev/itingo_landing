<script>
	import { Avatar, Button  } from "flowbite-svelte";
</script>


<div class="lg:w-7/12 w-12/12 flex  flex-col justify-center items-center logotypes border-2 border-viol rounded-xl h-auto pr-4 pl-4 pb-4 pt-2 bg-lightGray">

			<h2 class="text-center text-3xl text-viol font-black mb-4">Logotypy</h2>

			<div class="flex flex-wrap flex-row w-full justify-between mb-10">
				<div class="flex-row flex-wrap w-full flex lg:justify-between md:justify-between justify-center mb-10">			
					<div class="icons-wrap mb-8 ">
						<h3 class=" text-center text-2xl text-viol font-black mb-4">Znaki</h3>
						<div class="flex flex-row flex-wrap lg:justify-between md:justify-between justify-center">
							<Avatar class="m-2 bg-lightGray " src="/images/resources/logo_white.svg" rounded size="xl" />
							<Avatar class="m-2" src="/images/resources/logo_viol.svg" rounded size="xl" />
							<Avatar class="m-2" src="/images/resources/logo_yellow.svg" rounded size="xl" />
						</div>
					</div>
					<div class="pr-5 pl-6 pb-6 flex justify-start  flex-col colours  h-auto  bg-lightGray">
						<h2 class="w-full text-center text-3xl text-viol font-black mb-1">Kolory</h2>
						<div class="flex flex-col flex-wrap items-start">
							<div class="flex flex-row flex-wrap items-center">
								<div class="rounded-xl m-2 h-10 w-10 bg-viol "/> 
								<span class="text-4xl text-viol font-bold">#4B158B</span> 
							</div>
							<div class="flex flex-row flex-wrap items-center">
								<div class="rounded-xl m-2 h-10 w-10 bg-lightYellow "/> 
								<span class="text-4xl text-viol font-bold">#FEC700</span> 
							</div>
							<div class="flex flex-row flex-wrap items-center">
								<div class="rounded-xl m-2 h-10 w-10 bg-white "/> 
								<span class="text-4xl text-viol font-bold">#FFFFFF</span> 
							</div>
							
						</div>
					</div>
				</div>
				<div class="logo-wrap w-full">
				<h3 class=" text-center text-2xl text-viol font-black mb-4">Logotypy</h3>
				<div class="flex flex-row flex-wrap  justify-center">
					<div class="m-2 rounded-xl h-32 w-64 bg-logos bg-lightYellow logos-viol "/>
					<div class="m-2 rounded-xl h-32 w-64 bg-logos bg-viol logos-yellow "/>
					<div class="m-2 rounded-xl h-32 w-64 border-2 border-white bg-logos logos-white "/>
				</div>
			</div>
			</div>
			<Button size="xl" href="https://github.com/oleg-darkdev/itingo/tree/master/static/images/resources" class="w-6/12" style="background-color: #4A148C;">Pobranie</Button>

	</div>

<style>
    .bg-logos {
		background-repeat: no-repeat;
		background-size: contain; 
		background-position: center;
	}


	.logos-white {
		background-image: url(/images/resources/logo_text_white.svg);
	
	}
	.logos-viol {
		background-image: url(/images/resources/logo_text_viol.svg);
	
	}
	.logos-yellow {
		background-image: url(/images/resources/logo_text_yellow.svg);
	
	}
</style>
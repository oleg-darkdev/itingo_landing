<script>
		import Header from '../layout/landing/Header.svelte';
import SignUpNgo from '../components/auth/SignUp/Ngo.svelte';
	import { Button } from 'flowbite-svelte';


	let chooseType = '';
</script>

<svelte:head>
	<title>ITingo: Sign up</title>
</svelte:head>

<Header />

<section class="login lg:justify-start md:justify-start sm:justify-center content-center" >
	<div style="" class="text-wrap lg:w-7/12 md:w-10/12 w-12/12  flex justify-end items-center ">
		<div style="max-width: 560px;" class="items-center flex w-full text-block flex-col bg-lightYellow dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
			    <span class="text-6xl text-stantley text-viol font-black">ITingo</span>
			    <h3 class="text-xl font-bold text-viol p-0 ">Registration
   				 </h3> 
				 {#if !chooseType}
					<div class="btns-wrap flex flex-col justify-between items-center ">
						<Button on:click={() => chooseType = 'ngo'} size="xl" class="w-10/12" color="purple">NGO</Button>
						<Button on:click={() => chooseType = 'volunteer'} size="xl" class="w-10/12" color="purple">Volunteer</Button>
						<Button on:click={() => chooseType = 'business'} size="xl" class="w-10/12" color="purple">Business</Button>
						<Button on:click={() => chooseType = 'startup'} size="xl" class="w-10/12" color="purple">Startup</Button>
					</div>
				 {/if}
				 {#if chooseType == 'ngo'}
					<SignUpNgo />
				 {/if}
				 <!-- {#if chooseType = 'volunteer'}


				 {/if}
				 {#if chooseType = 'business'}


				 {/if}
				 {#if chooseType = 'startup'}


				 {/if} -->

		</div>	
	</div>

</section>


<style>
    .login {
		min-height: 100vh;
		height: auto;
		background-image: url(/images/login-bg.svg);
		background-repeat: no-repeat;
		background-position: right;
		background-size: auto;
		background-attachment: fixed;
	}

	.btns-wrap {
		height: 230px;
		max-width: 430px;
		min-width: 320px;
	}

	@media (min-width: 1024px) {
		.text-wrap {
			background-color: #fff;
		}


	}

	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.text-wrap {
			background-color: none;
		}
		.text-block {
			background-color: #fff;
			width: 100%;
		}
	}
</style>
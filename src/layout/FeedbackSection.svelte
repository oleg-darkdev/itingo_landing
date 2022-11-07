<script>
  import { Card } from "flowbite-svelte";
  import feedbacksList from '../data/feedbacksList'
  import { Avatar } from "flowbite-svelte"
</script>

<section class="flex items-center flex-col lg:p-20 pt-4 pb-4 pr-2 pl-2  bg-lightYellow" id="feedback ">
  <h2 class="w-full m-8 text-center text-6xl text-viol font-bold ">
		Opinie klientów
    <span style="" class="text-logo-letter-spacing text-viol text-stantley">ITingo</span>
    </h2>

    <Card padding="none" size="xl" class="grid md:grid-cols-2">
        {#each feedbacksList as feedback}
  <figure 
    data-aos="zoom-in-up"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true"
    class="m-1 flex flex-col justify-center items-center p-8 text-center bg-viol rounded-lg  border-b   dark:bg-gray-800 dark:border-gray-700">
  <blockquote class="mx-auto mb-4 max-w-2xl ">
    <h3 class="p-0 text-lg font-semibold text-white ">{feedback.title}</h3>
    <p class="my-4 font-light text-white">{feedback.text}</p>
  </blockquote>
  <figcaption class="flex justify-center items-center space-x-3">
    <!-- <img class="w-9 h-9 rounded-full" src={feedback.avatarImg} alt='{feedback.name} profile'> -->
<Avatar src={feedback.avatarImg} alt='{feedback.name} profile' class="full" rounded size="lg" />
    <div class="space-y-0.5 font-medium text-white  text-left">
      <span class="text-2xl">{feedback.firstName} {feedback.lastName}</span>
      <div class="text-sm font-light text-white">{feedback.position} at {feedback.company}</div>
    </div>
  </figcaption>
  </figure>
  {/each}
</Card>
</section> 


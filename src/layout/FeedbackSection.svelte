<script>
  import feedbacksList from '../data/feedbacksList';
  import { Avatar, Card, Button  } from "flowbite-svelte";
</script>

<section class="flex items-center flex-col lg:p-20 pt-4 pb-4 pr-2 pl-2  h-auto bg-lightYellow" id="feedback ">
  <h2 class="w-full text-center text-6xl text-viol font-black">
		Opinie odbiorców
    <span style="" class="text-logo-letter-spacing text-viol text-stantley">ITingo</span>
    </h2>
    <p class="my-4 lg:w-6/12 md:w-8/12 w-12/12 text-4xl text-center  font-regular text-viol">
      Proszęmy sprawdzić referencje o nas - jesteśmy bardzo dumni z naszej kolekcji referencji 
    </p>
    <Card padding="none" size="xl" class="grid md:grid-cols-2">
        {#each feedbacksList as feedback}
        <a href="/reviews">
  <figure 
    data-aos="zoom-in-up"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true"
    class="m-1 flex flex-col justify-center items-center p-8 text-center bg-viol rounded-lg  border-b  hover:bg-lightYellow">
  <blockquote class="mx-auto mb-4 max-w-2xl ">
    <h3 class="p-0 text-lg font-semibold text-white ">{feedback.title}</h3>
    <p class="my-4 font-light text-white">{feedback.text}</p>
  </blockquote>
  <figcaption class="flex justify-center items-center space-x-3">
  <Avatar src={feedback.avatarImg} alt='{feedback.name} profile' class="full" rounded size="lg" />
  
    <div class="space-y-0.5 font-medium text-white  text-left">
      <span class="text-2xl">{feedback.firstName} {feedback.lastName}</span>
      <div class="text-sm font-light text-white">{feedback.position} at {feedback.company}</div>
    </div>
  </figcaption>
  </figure>
  </a>
  {/each}

</Card>
  <div class="w-full flex justify-center">
    <Button class="mt-6 mb-6 lg:w-4/12 w-8/12" href='/reviews' size="lg" color="purple">Pokaż wszystkie</Button>
  </div>



</section> 


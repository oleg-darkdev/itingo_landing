<script>
  import socialCordinatorLinks from '../../../data/landing/socialCordinatorLinks';
</script>

<div data-aos="flip-up"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true"
     class="flex max-w-sm flex-col  dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-400 rounded-lg  dark:border-gray-700">
  <img loading="lazy" class="rounded-t-lg" src="/images/family/coordinator.png" alt=""> 
  <div class="p-6 rounded bg-lightYellow">
    <h5 class="mb-1 text-2xl font-bold text-center tracking-tight text-viol">
      Koordynator projektu
    </h5> 
    <p class="mb-3 text-4xl font-black text-center text-viol">
      Oleg Medvedev
    </p>

    <div style="" class="border-viol wrap-social-container mb-4 flex-col items-center justify-center">
    <div class="social-coordinator-container">
        <a target="_blank" href="{socialCordinatorLinks.facebook}"><i class="icon-facebook fb-mode "></i></a>
        <a  target="_blank" href="{socialCordinatorLinks.linkedin}"><i class="icon-linkedin ln-mode "></i></a> 
        <a target="_blank" href="{socialCordinatorLinks.github}"><i class="icon-github gh-mode "></i></a>

    </div>
    <h2 class="w-full text-center text-3xl text-viol font-black m-0"><i class="icon-hand-up text-viol"></i> w mediach <i class="icon-hand-up text-viol"></i></h2>
</div>

  </div>
</div>



<style>
    	
.social-coordinator-container {
  font-size: 2.5em;
  height: 60px;
  max-width: 360px;
}


.fb-mode {
  color: #ea4c89;
}

.ln-mode {
  color: #00A5E6;
}

.gh-mode {
  color: #4A148C;
}
</style>
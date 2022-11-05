<script>
  import socialItingoLinks from '../data/socialItingoLinks';
</script>

<div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 bg-viol">

 <div>
    <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Dla IT wolontariutu
    </h2> 
    <ul class="text-gray-300">
            <li class="mb-3">
        <a href="/volunteer#work" class="hover:underline">Rodzaje prac
        </a>
      </li>
     <li class="mb-3">
        <a href="/volunteer#faq " class="hover:underline">FAQ wolontariutu
        </a>
      </li>
      <li class="mb-3">
        <a href="/volunteer#start" class="hover:underline">Zostań IT wolontariuszem
        </a>
      </li>
      </ul> 
 
    <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Benefity dla wolontariuszy
    </h2> 
<ul class="text-gray-300">
      <li class="mb-3">
        <a href="/volunteer#mentoring" class="hover:underline">Pomoc dla początkujących w IT & Mentoring 
        </a>
      </li>
      <li class="mb-3">
        <a href="/volunteer#letter" class="hover:underline">Pomoc w zatrudnieniu
        </a>
      </li>
      <li class="mb-3">
        <a href="/volunteer#schedule" class="hover:underline">Wolny harmonogram udziału
        </a>
      </li>
      <li class="mb-3">
        <a href="/volunteer#technology" class="hover:underline">Swoboda wyboru technologii dla projektów
        </a>
      </li>
   </ul>   
   
    
  </div> 
  <div>
    <h2 class="mt-8 mb-1text-sm font-semibold uppercase text-lightYellow">Wspieramy wsperajiencych
    </h2> 
    <ul class="text-gray-300">
      <li class="mb-3">
        <a href="/faq" class="hover:underline">FAQ
        </a>
      </li>
        <li class="mb-3">
              <a href="/family" class="hover:underline">Nasza rodzina
              </a>
            </li>
            
            <li class="mb-3">
              <a href="#impact" class="hover:underline">Już pomogliśmy 
              </a>
            </li>
            <li class="mb-3">
              <a href="/#feedback" class="hover:underline">Recenzje o nas
              </a>
            </li>
            <li class="mb-3">
              <a href="" class="hover:underline">Materiały do pobrania
              </a>
            </li>
    </ul>

    

      <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Dla kogo pracujemy
    </h2> 
<ul class="text-gray-300">    
      <li class="mb-3">
        <a href="/startups" class="hover:underline">Dla startupow
        </a>
      </li>
            <li class="mb-3">
        <a href="/ngo" class="hover:underline"> Dla NGO
        </a>
      </li>
      <li class="mb-3">
        <a href="/business" class="hover:underline">Dla biznesu
        </a>
      </li>
      <li class="mb-3">
        <a href="/volunteer" class="hover:underline">Dla IT wolontariutu
        </a>
      </li>
      

  </div>
   <div>
    <h2 class="mt-8 mb-1text-sm font-semibold uppercase text-lightYellow">Dla NGO
    </h2> 
    <ul class="text-gray-300">
      <li class="mb-3">
        <a href="/ngo#faq " class="hover:underline">FAQ dla ngo
        </a>
      </li>
        <li class="mb-3">
          <!-- google form -->
        <a href="https://forms.gle/M5eVAR7oRuXVoder8" class="hover:underline">Zgłoś projekt
        </a>
      </li>
      <li class="mb-3">
        <a href="/ngo#volunteer" class="hover:underline">Znajdź IT wolontariusza
        </a>
      </li>

      
    </ul>  


    <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Pomoc z IT: projektowanie
    </h2> 
    <ul class="text-gray-300">
      <li class="mb-3">
        <a href="/ngo#design" class="hover:underline">Pomóc z graficami
        </a>
      </li>
      <li class="mb-3">
        <a href="/ngo#design" class="hover:underline">Wideo promocyjne
        </a>
      </li>
      <li class="mb-3">
        <a href="/ngo#social-media" class="hover:underline">Pomoc w zakresie mediów 
        </a>
      </li>
      <li class="mb-3">
        <a href="/ngo#projecting" class="hover:underline">Pomóc z projektowaniem stron
        </a>
      </li>
    </ul>

    <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Pomoc z IT: Po stronie klienta
    </h2> 
    <ul class="text-gray-300">
      <li class="mb-3">
        <a href="/ngo#site" class="hover:underline">Pomóc z tworzeniem strony
        </a>
      </li>

      <li class="mb-3">
        <a href="/ngo#seo" class="hover:underline">Pomóc z Seo
        </a>
      </li>
    </ul>


    <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Pomoc z IT: Po stronie serwera
    </h2> 
    <ul class="text-gray-300">

    <li class="mb-3">
        <a href="/ngo#security" class="hover:underline">IT bezpieczeństwo
        </a>
      </li>
      <li class="mb-3">
        <a href="/ngo#design" class="hover:underline">Serwis komputerowy
        </a>
      </li>
      <li class="mb-3">
        <a href="/ngo#server" class="hover:underline">Pomóc na serwerze
        </a>
      </li>
      </ul>  
      

   
    
  </div> 
    <div>
          <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Kontakt
    </h2> 
    <ul class="text-gray-300">
      {#each Object.values(socialItingoLinks) as socialLink}
      <li class="mb-3">
        <a href={socialLink.link} class="hover:underline">{socialLink.title}
        </a>
      </li>
      {/each}
    </ul>
    
    
    <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Nasza rodzina
    </h2> 
    <ul class="text-gray-300">
      <li class="mb-3">
        <a href="/" class="hover:underline">Nasi sponsorzy
        </a>
      </li>
      <li class="mb-3">
        <a href="/" class="hover:underline">Nasi partnerzy
        </a>
      </li>
      <li class="mb-3">
        <a href="/" class="hover:underline">Nasza społeczność wolontariuszy
        </a>
      </li>
      <li class="mb-3">
        <a href="/" class="hover:underline">Nasi ulubieni klienci
        </a>
      </li>
    </ul>
    

    <!-- <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Sponsor generalny
    </h2>  -->
    <!-- mb-3 -->
    

    <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Główni partnerzy techniczni
    </h2> 
    <div class="flex flex-col">
      <img style="width: 300px;" class="logo-partners" src="/images/sponsors/logo_general_sponsor.svg" alt="">
      <img style="width: 300px;" class="logo-partners" src="/images/sponsors/logo_partner_cubes.svg" alt="">
    </div>
        <!-- <h2 class="mt-8 mb-1 text-sm font-semibold uppercase text-lightYellow">Główny partner medialny
    </h2>  -->
    <!-- mb-3 -->


  </div> 
</div> 
<div class="py-6 px-4 bg-violDark md:flex md:items-center md:justify-between">
    <div class="flex flex-row">
       <img src="/images/logo.svg" class="mt-1 h-6 sm:h-9" alt="ITingo Logo"/>
        <span class="self-center whitespace-nowrap lg:text-5xl md:text-4xl  text-3xl   text-lightYellow text-stantley">
          ITingo
       </span>
    
    </div>
  <span class="text-sm text-gray-300 sm:text-center">© 2022 
    <a href="/" class="hover:underline">44Hackerspace™
    </a>
    . All Rights Reserved.
  </span>
  <!--<FooterCopyright>--> 
  <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
    <a href="/" aria-label="" class="text-gray-500 hover:text-gray-900 dark:hover:text-white text-lightYellow hover:text-white">
    </a>
    <!--<FooterIcon>--> 
    <a href="/" aria-label="" class="text-gray-500 hover:text-gray-900 dark:hover:text-white text-lightYellow hover:text-white">
    </a>
    <!--<FooterIcon>--> 
    <a href="/" aria-label="" class="text-gray-500 hover:text-gray-900 dark:hover:text-white text-lightYellow hover:text-white">
    </a>
    <!--<FooterIcon>-->
  </div>
</div>



<style>
  .logo-partners:hover {

}
</style>
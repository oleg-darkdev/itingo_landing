<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, ButtonGroup, Button } from 'flowbite-svelte'

  let showAbousUs = false;
</script>

<Navbar class="bg-viol" let:hidden let:toggle>
  <NavBrand href="/">
    <img loading="lazy" src="/images/resources/logo_white.svg" class=" h-10 " alt="ITingo Logo"/>
    <span class="self-center whitespace-nowrap lg:text-5xl md:text-4xl  text-3xl   text-lightYellow text-stantley">
      ITingo
    </span>
  </NavBrand>


    <div class="flex md:order-2 lg:mt-0 md:mt-0 mt-2">
    <!-- <Avatar id="avatar-menu" src="/images/oleg.png" /> -->
      <Button class="mr-4" size="sm" color="yellow" href='/support'>Wspieraj </Button>

    <ButtonGroup>
      <Button href='/login' outline color="yellow" size="md">Sign In</Button>
      <Button href='/signup' size="sm" color="yellow">Sign up</Button>
    </ButtonGroup>

    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
  </div>
  <NavUl {hidden} class="order-1">
    <NavLi href="/" active={true}>Strona główna</NavLi>
    <NavLi href="/ngo">NGO</NavLi>
    <!-- <NavLi href="/startups">Startapam</NavLi> -->
    <NavLi href="/volunteer">IT wolontariutu</NavLi>
    <NavLi href="/business">Biznesu</NavLi> 
    <NavLi href="/family">Nasza rodzina</NavLi>
    <NavLi href="/faq">FAQ</NavLi>
    <NavLi href="#contact">Kontakt</NavLi>
    <div>
    <NavLi on:click={()=> showAbousUs = !showAbousUs}>O nas
 
    </NavLi>
     {#if showAbousUs}
        <div class="lg:mt-5 md:mt-5 mt-2 rounded-md  bg-lightYellow h-auto lg:w-44 md:w-44 w-11/12 z-20 absolute ">
          <ul class="w-full rounded-md ">
            <li class="">
              <button onclick="window.location='/about#about-us';" class="rounded-tr-md rounded-tl-md font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                O nas
              </button>
            </li> 
            <li class="">
              <button onclick="window.location='/about#philosophy';"  class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Filozofia projektu
              </button>
            </li> 
            <li class="">
              <button onclick="window.location='/about#manifest';"  class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Statut Fundacji
              </button>
            </li> 
            <li class="">
              <button onclick="window.location='/about#feedback';"  class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                 Referencje o nas
              </button>
            </li> 
            <li class="">
              <button onclick="window.location='/support';"  class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Jak nas wesprzeć
              </button>
            </li> 
            <li class="">
              <button onclick="window.location='/about#roadmap';"  class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Roadmap
              </button>
            </li> 
            <li class="">
              <button onclick="window.location='/about#sitemap';"  class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Sitemap
              </button>
            </li> 
            
            <li class="">
              <button onclick="window.location='/resources';"  class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Materiały do pobrania
              </button>
            </li> 
            <li class="">
              <button onclick="window.location='/about#reports';"   class="font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Sprawozdania
              </button>
            </li>
            <div class="my-1 h-px bg-violDark">
            </div> 
            <li class=" ">
              <button onclick="window.location='/about#contact';" class="rounded-br-md rounded-bl-md font-medium py-2 px-4 text-sm hover:bg-viol text-violDark hover:text-lightYellow w-full text-left">
                Contact
              </button>
            </li> 
          </ul>
        </div>
      {/if}
      </div>
  </NavUl>
</Navbar>


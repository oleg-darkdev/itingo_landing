<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, ButtonGroup, Button } from 'flowbite-svelte'
</script>

<Navbar class="bg-viol" let:hidden let:toggle>
  <NavBrand href="/">
    <img loading="lazy"  src="/images/resources/logo_white.svg" class=" h-10 "  alt="ITingo Logo"/>
    <span class="self-center whitespace-nowrap lg:text-5xl md:text-4xl  text-3xl   text-lightYellow text-stantley">
      ITingo
    </span>
  </NavBrand>

  <NavUl {hidden} >
    <NavLi href="/" >Strona główna</NavLi>
    <NavLi href="/workspace/ngo">NGO Organizacje</NavLi>
    <NavLi href="/workspace/progects">NGO Projekty</NavLi>
    <NavLi href="/workspace/volounteers">IT wolontariusze </NavLi>
    <NavLi href="/workspace/startups">Startupy</NavLi>
    <NavLi href="/faq">FAQ</NavLi>
  </NavUl>
 
    <div class="flex items-center md:order-2">
    <!-- <Avatar id="avatar-menu" src="/images/oleg.png" /> -->
    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
  </div>
  <div class="flex items-center md:order-2">
    <ButtonGroup>
      <Button href='/login' outline color="yellow" size="md">Sign In</Button>
      <Button href='/signup' size="md" color="yellow">Sign up</Button>
    </ButtonGroup>
  </div>

</Navbar>
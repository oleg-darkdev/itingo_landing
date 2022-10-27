<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
</script>

<Navbar class="bg-viol" let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/images/logo.svg" class=" h-6 sm:h-9" alt="ITingo Logo"/>
    <span class="self-center whitespace-nowrap lg:text-5xl md:text-4xl  text-3xl   text-lightYellow text-stantley">
      ITingo
    </span>
  </NavBrand>

  <NavUl {hidden} >
    <NavLi href="/" active={true}>Strona główna</NavLi>
    <NavLi href="/ngo">NGO</NavLi>
    <NavLi href="/startups">Startapam</NavLi>
    <NavLi href="/business">Biznesu</NavLi>
    <NavLi href="/volounteers">IT wolontariutu</NavLi>
    <!-- <NavLi href="#steps">Find volunteer</NavLi> -->
    <NavLi href="#impact">Już pomogliśmy</NavLi> 
    <NavLi href="#contact">Nasza rodzina</NavLi>
    <NavLi href="#faq">FAQ</NavLi>
    <NavLi href="#family">Kontakt</NavLi>
  </NavUl>
 
    <div class="flex items-center md:order-2">
    <!-- <Avatar id="avatar-menu" src="/images/oleg.png" /> -->
    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
  </div>

          <!-- <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src="/images/oleg.png" />
    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
  </div>

  <Dropdown placement="bottom" triggeredBy="#avatar-menu">


    <DropdownHeader>
    <span class="block text-sm"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
    </DropdownHeader>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown> -->
</Navbar>
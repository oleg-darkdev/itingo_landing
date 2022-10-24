<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
</script>

<Navbar class="bg-viol" let:hidden let:toggle>
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="ITingo Logo"/>
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ITingo</span>
  </NavBrand>

  <NavUl {hidden} >
    <NavLi href="/" active={true}>Strona główna</NavLi>
    <NavLi href="#about">NGO</NavLi>
    <NavLi href="#about">Startapam</NavLi>
    <NavLi href="#about">Biznesu</NavLi>
    <NavLi href="#about">IT wolontariutu</NavLi>
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
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
</script>

<Navbar class="bg-viol" let:hidden let:toggle>
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>

  <NavUl {hidden} >
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Find volunteer</NavLi>
    <NavLi href="/pricing">Our Impact</NavLi> 
    <NavLi href="/contact">Our Family</NavLi>
    <NavLi href="/contact">FAQ</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>

    <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src="/images/oleg.png" />
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
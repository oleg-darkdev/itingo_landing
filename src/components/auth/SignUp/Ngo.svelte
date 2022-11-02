<script>
  import { Label, Button, Input  } from 'flowbite-svelte'
</script>


<form class="flex flex-col space-y-6 w-full" action="/">
    <Label class="space-y-2">
        <span class="text-viol">Email</span>
        <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2 ">
        <span class="text-viol">Your password</span>
        <Input class="text-viol" type="password" name="password" placeholder="•••••" required />
    </Label>
    

    <Button type="submit" class="w-full">Registration</Button>
</form>

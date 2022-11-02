<script>
  import { Label, Button, Input, Checkbox } from 'flowbite-svelte'
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
    <div class="flex items-start">
        <a href="/" class="ml-auto text-sm text-viol hover:underline dark:text-blue-500">Lost password?</a>
    </div>
    <Button type="submit" class="w-full">Login to your account</Button>
</form>

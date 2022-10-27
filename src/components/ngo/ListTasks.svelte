<script>
  import { List, Li } from 'flowbite-svelte';
</script>

<List tag="ol" list="decimal">
  <Li
    >List item one
    <List tag="ul" class="pl-5 mt-2 space-y-1">
      <Li>You might feel like you are being really "organized" o</Li>
      <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
      <Li>Nesting tons of folders in your source code is also not helpful.</Li>
    </List>
  </Li>
</List>
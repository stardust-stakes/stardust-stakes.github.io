<script lang="ts">
  import { characters } from "$lib/characters";
</script>

<div class="w-full flex flex-col items-center pt-4 pb-12">
  <picture>
    <source srcset="/stardust_stakes_transparent.webp" type="image/webp" />
    <img
      src="/stardust_stakes_transparent.png"
      alt="Stardust Stakes"
      class="max-w-sm mb-4"
    />
  </picture>
  <ul class="uppercase">
    {#each characters as character}
      <li class={"text-3xl mb-8 text-center"}>
        <a href="/player/{character.path}" class="">{character.actor}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  li {
    padding-bottom: 30px;
    border-bottom: 1px solid #454545;
  }
</style>

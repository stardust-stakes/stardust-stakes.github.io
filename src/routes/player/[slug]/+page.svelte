<script lang="ts">
  import type { PageData } from "./$types";
  import { persisted } from 'svelte-local-storage-store';
  export let data: PageData;

  let response: string = "";
  export const solved = persisted("solved-" + data.actor, false);
  let inputGroup: HTMLDivElement;
</script>

<div class="w-full h-full flex flex-col items-center py-12 pb-32">
  <div class="mx-30 m-8">
    {#if !$solved}
        <div class="w-full h-full flex flex-col justify-center items-center py-12">
          <h1 class="text-center text-4xl uppercase mb-6">Riddle</h1>
          <p class="text-2xl mb-8 max-w-lg">
            {data.riddle}
          </p>
          <div class="join" bind:this={inputGroup}>
            <input
              bind:value={response}
              type="text"
              class="input join-item"
              placeholder="Answer here..."
            />
            <input
              type="submit"
              class="btn join-item"
              on:click={() => {
                if (response.toLowerCase().includes(data.answer)) {
                  solved.set(true);
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                } else {
                  response = "";
                  inputGroup.classList.add("shake");
                  setTimeout(() => {
                    inputGroup.classList.remove("shake");
                  }, 400);
                }
              }}
            />
          </div>
        </div>
      {:else}
    <article class="prose prose-slate dark:prose-invert">
      
        <!--  -->
        <h1 class="text-xl text-center">{data.actor} is...</h1>
        <div class="w-full flex flex-row justify-center">
          <div class="flex flex-row w-min mr-6">
            <div>
              <svelte:component
                this={data.icon}
                class={"w-24 h-24 mx-3 " + data.tailwindColor}
              />
            </div>
            <h1 class="text-5xl !mb-0 min-content w-min">{data.character}</h1>
          </div>
        </div>
        <hr class="mt-6 mb-4" />
        <h2 class={"text-3xl text-center !mt-1 mb-2 " + data.tailwindColor}>
          {data.subtitle}
        </h2>
        <hr class="mt-6 mb-6" />
        <p class="text-2xl">{data.blurb}</p>
        <hr/>
        <h2 class={"text-3xl font-bold text-center uppercase"}>Costume Suggestion</h2>
        <p class="text-2xl">{data.costume}</p>
        <hr class="mb-4" />
        <hr class="" />
    </article>
    {/if}

  </div>
</div>

<style>
  @keyframes shake {
    0% {
      margin-left: 0rem;
    }
    25% {
      margin-left: 0.5rem;
    }
    75% {
      margin-left: -0.5rem;
    }
    100% {
      margin-left: 0rem;
    }
  }

  .shake {
    animation: shake 0.2s ease-in-out 0s 2;
  }

  h1, p, li {
    @apply text-gray-100;
  }
</style>

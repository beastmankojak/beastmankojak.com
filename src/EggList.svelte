<script>
  export let eggs;
  import Egg from "./EggPreview.svelte";
  import EggDetails from "./EggDetails.svelte";
  import { getContext } from "svelte";

  const { open } = getContext("simple-modal");

  const showEgg = (egg) => {
    open(EggDetails, { egg });
  };
</script>

{#if eggs.length > 0}
  <ul>
    {#each eggs as egg}
      <li on:click={() => showEgg(egg)}><Egg {egg} /></li>
    {/each}
  </ul>
{:else}
  <p>No eggs found.</p>
{/if}

<style>
  li {
    list-style-type: none;
    border: solid 1px black;
    margin: 5px;
    padding: 5px;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 0px;
  }
</style>

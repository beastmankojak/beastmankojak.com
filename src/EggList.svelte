<script>
  export let eggs;
  import Egg from "./EggPreview.svelte";
  import EggDetails from "./EggDetails.svelte";
  import Pager from "./Pager.svelte";
  import { getContext } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let page;

  const dispatch = createEventDispatcher();
  const { open } = getContext("simple-modal");

  const showEgg = (egg) => {
    open(EggDetails, { egg });
  };

  const updatePage = () => {
    console.log("dispatch updatePage");
    dispatch("updatePage");
  };
</script>

{#if eggs.length > 0}
  <Pager on:change={updatePage} bind:page length={eggs.length} />
  <ul>
    {#each eggs as egg}
      <li on:click={() => showEgg(egg)}><Egg {egg} /></li>
    {/each}
  </ul>
  <Pager on:change={updatePage} bind:page length={eggs.length} />
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

<script>
  export let derplings;
  export let traits;
  import Derpling from "./DerplingPreview.svelte";
  import DerplingDetails from "./DerplingDetails.svelte";
  import Pager from "../Pager.svelte";
  import { getContext } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let page;

  const dispatch = createEventDispatcher();
  const { open } = getContext("simple-modal");

  const showDerpling = (derpling) => {
    open(DerplingDetails, { derpling, traits });
  };

  const updatePage = () => {
    dispatch("updatePage");
  };
</script>

{#if derplings.length > 0}
  <Pager on:change={updatePage} bind:page length={derplings.length} />
  <ul>
    {#each derplings as derpling}
      <li on:click={() => showDerpling(derpling)}><Derpling {derpling} /></li>
    {/each}
  </ul>
  <Pager on:change={updatePage} bind:page length={derplings.length} />
{:else}
  <p>No derplings found.</p>
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

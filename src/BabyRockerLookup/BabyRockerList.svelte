<script>
  export let rockers;
  export let traits;
  import BabyRocker from "./BabyRockerPreview.svelte";
  import BabyRockerDetails from "./BabyRockerDetails.svelte";
  import Pager from "../Pager.svelte";
  import { getContext } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let page;

  const dispatch = createEventDispatcher();
  const { open } = getContext("simple-modal");

  const showRocker = (rocker) => {
    open(BabyRockerDetails, { rocker, traits });
  };

  const updatePage = () => {
    dispatch("updatePage");
  };
</script>

{#if rockers.length > 0}
  <Pager on:change={updatePage} bind:page length={rockers.length} />
  <ul>
    {#each rockers as rocker}
      <li on:click={() => showRocker(rocker)}><BabyRocker {rocker} /></li>
    {/each}
  </ul>
  <Pager on:change={updatePage} bind:page length={rockers.length} />
{:else}
  <p>No baby rockers found.</p>
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

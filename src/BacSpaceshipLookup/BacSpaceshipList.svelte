<script>
  export let spaceships;
  export let traits;
  import BacSpaceship from "./BacSpaceshipPreview.svelte";
  import BacSpaceshipDetails from "./BacSpaceshipDetails.svelte";
  import Pager from "../Pager.svelte";
  import { getContext } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let page;

  const dispatch = createEventDispatcher();
  const { open } = getContext("simple-modal");

  const showSpaceship = (spaceship) => {
    open(BacSpaceshipDetails, { spaceship, traits });
  };

  const updatePage = () => {
    dispatch("updatePage");
  };
</script>

{#if spaceships.length > 0}
  <Pager on:change={updatePage} bind:page length={spaceships.length} />
  <ul>
    {#each spaceships as spaceship}
      <li on:click={() => showSpaceship(spaceship)}>
        <BacSpaceship {spaceship} />
      </li>
    {/each}
  </ul>
  <Pager on:change={updatePage} bind:page length={spaceships.length} />
{:else}
  <p>No spaceships found.</p>
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

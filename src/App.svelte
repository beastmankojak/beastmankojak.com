<script>
  import EggList from "./EggList.svelte";
  import EggFilter from "./EggFilter.svelte";
  import Modal from "svelte-simple-modal";

  let eggsLoading = false;
  let eggsError = "";
  let eggs = [];
  const filter = {
    symbol: "",
    perfect: "",
    xChromo: "",
    yChromo: "",
  };

  const fetchEggs = async () => {
    try {
      eggsLoading = true;
      eggsError = "";
      const qs = [];
      if (filter.symbol) {
        qs.push(`symbol=${filter.symbol}`);
      }
      if (filter.perfect) {
        qs.push(`perfect=${filter.perfect}`);
      }
      if (filter.xChromo) {
        qs.push(`xChromo=${filter.xChromo}`);
      }
      if (filter.yChromo) {
        qs.push(`yChromo=${filter.yChromo}`);
      }

      const baseUrl = "http://localhost:3000/derp-eggs/";
      const response = await fetch(
        qs.length ? `${baseUrl}?${qs.join("&")}` : baseUrl
      );
      eggs = await response.json();
    } catch (err) {
      console.log(err);
      eggsError = err.message;
    } finally {
      eggsLoading = false;
    }
  };
</script>

<main>
  <h1>Egg lookup</h1>
  <EggFilter
    on:click={fetchEggs}
    bind:symbol={filter.symbol}
    bind:perfect={filter.perfect}
    bind:xChromo={filter.xChromo}
    bind:yChromo={filter.yChromo}
  />
  {#if eggsLoading}
    <h2>Loading...</h2>
  {:else if eggsError}
    <p>Error: {eggsError}</p>
  {:else}
    <Modal>
      <EggList {eggs} />
    </Modal>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

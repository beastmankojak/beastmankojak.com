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
  let sort = "eggIdAsc";
  let page = 1;
  let currentFilter;

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/derp-eggs"
      : "http://localhost:3000/derp-eggs/";

  const doFetch = async (qs) => {
    try {
      eggsLoading = true;
      eggsError = "";

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

  const fetchEggs = async () => {
    page = 1;
    currentFilter = [];
    if (filter.symbol) {
      currentFilter.push(`symbol=${filter.symbol}`);
    }
    if (filter.perfect) {
      currentFilter.push(`perfect=${filter.perfect}`);
    }
    if (filter.xChromo) {
      currentFilter.push(`xChromo=${filter.xChromo}`);
    }
    if (filter.yChromo) {
      currentFilter.push(`yChromo=${filter.yChromo}`);
    }
    if (sort) {
      currentFilter.push(`sort=${sort}`);
    }
    await doFetch(currentFilter);
  };

  const updatePage = async () => {
    await doFetch([...currentFilter, `page=${page}`]);
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
    bind:sort
  />
  {#if eggsLoading}
    <h2>Loading...</h2>
  {:else if eggsError}
    <p>Error: {eggsError}</p>
  {:else}
    <Modal>
      <EggList {eggs} bind:page on:updatePage={updatePage} />
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

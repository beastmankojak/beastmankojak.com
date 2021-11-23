<script>
  import Modal from "svelte-simple-modal";
  import DerplingFilter from "./DerplingFilter.svelte";
  import DerplingList from "./DerplingList.svelte";

  let derplingsLoading = false;
  let derplingsError = "";
  let derplings = [];
  const filter = {
    aura: "",
    beak: "",
    body: "",
    eyes: "",
    head: "",
    cargo: "",
    color: "",
    gender: "",
    eggshell: "",
    pedestal: "",
    basecolor: "",
    dadbodTag: "",
    twins: "",
  };
  let sort = "hatchAsc";
  let derplingId = "";
  let page = 1;
  let currentFilter;
  let traits = {};

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/derplings"
      : "http://localhost:3000/derplings";

  const doFetch = async (qs) => {
    try {
      derplingsLoading = true;
      derplingsError = "";
      const response = await fetch(
        qs.length ? `${baseUrl}/?${qs.join("&")}` : baseUrl
      );
      derplings = await response.json();
    } catch (err) {
      console.log(err);
      derplingsError = err.message;
    } finally {
      derplingsLoading = false;
    }
  };

  const doFetchOne = async (derplingId) => {
    try {
      derplingsLoading = true;
      derplingsError = "";
      const response = await fetch(`${baseUrl}/${derplingId}`);
      derplings = [(await response.json()).derpling];
    } catch (err) {
      console.log(err);
      derplingsError = err.message;
    } finally {
      derplingsLoading = false;
    }
  };

  const fetchDerplings = async () => {
    page = 1;
    currentFilter = [];

    if (derplingId) {
      await doFetchOne(derplingId);
    } else {
      if (filter.aura) {
        currentFilter.push(`aura=${filter.aura}`);
      }
      if (filter.beak) {
        currentFilter.push(`beak=${filter.beak}`);
      }
      if (filter.body) {
        currentFilter.push(`body=${filter.body}`);
      }
      if (filter.eyes) {
        currentFilter.push(`eyes=${filter.eyes}`);
      }
      if (filter.head) {
        currentFilter.push(`head=${filter.head}`);
      }
      if (filter.cargo) {
        currentFilter.push(`cargo=${filter.cargo}`);
      }
      if (filter.color) {
        currentFilter.push(`color=${filter.color}`);
      }
      if (filter.gender) {
        currentFilter.push(`gender=${filter.gender}`);
      }
      if (filter.eggshell) {
        currentFilter.push(`eggshell=${filter.eggshell}`);
      }
      if (filter.pedestal) {
        currentFilter.push(`pedestal=${filter.pedestal}`);
      }
      if (filter.basecolor) {
        currentFilter.push(`basecolor=${filter.basecolor}`);
      }
      if (filter.dadbodTag) {
        currentFilter.push(`dadbodTag=${filter.dadbodTag}`);
      }
      if (filter.twins) {
        currentFilter.push(`twins=${filter.twins}`);
      }
      if (sort) {
        currentFilter.push(`sort=${sort}`);
      }
      await doFetch(currentFilter);
    }
  };

  const updatePage = async () => {
    await doFetch([...currentFilter, `page=${page}`]);
  };
</script>

<main>
  <h1>Derpling lookup</h1>
  <DerplingFilter
    {baseUrl}
    on:click={fetchDerplings}
    bind:aura={filter.aura}
    bind:beak={filter.beak}
    bind:body={filter.body}
    bind:eyes={filter.eyes}
    bind:head={filter.head}
    bind:cargo={filter.cargo}
    bind:color={filter.color}
    bind:gender={filter.gender}
    bind:eggshell={filter.eggshell}
    bind:pedestal={filter.pedestal}
    bind:basecolor={filter.basecolor}
    bind:dadbodTag={filter.dadbodTag}
    bind:twins={filter.twins}
    bind:sort
    bind:traits
    bind:derplingId
  />
  {#if derplingsLoading}
    <h2>Loading...</h2>
  {:else if derplingsError}
    <p>Error: {derplingsError}</p>
  {:else}
    <Modal>
      <DerplingList {derplings} {traits} bind:page on:updatePage={updatePage} />
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

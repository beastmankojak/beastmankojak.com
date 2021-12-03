<script>
  import Modal from "svelte-simple-modal";
  import BabyRockerFilter from "./BabyRockerFilter.svelte";
  import BabyRockerList from "./BabyRockerList.svelte";

  let rockersLoading = false;
  let rockersError = "";
  let rockers = [];
  const filter = {
    hat: "",
    body: "",
    eyes: "",
    mouth: "",
    clothes: "",
    accessory: "",
    background: "",
  };
  let sort = "nameAsc";
  let name = "";
  let page = 1;
  let currentFilter;
  let traits = {};

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/baby-rocker"
      : "http://localhost:3000/baby-rocker";

  const doFetch = async (qs) => {
    try {
      rockersLoading = true;
      rockersError = "";
      const response = await fetch(
        qs.length ? `${baseUrl}/?${qs.join("&")}` : baseUrl
      );
      if (response.ok) {
        rockers = await response.json();
      } else {
        rockersError = await response.text();
      }
    } catch (err) {
      console.log(err);
      rockersError = err.message;
    } finally {
      rockersLoading = false;
    }
  };

  const doFetchOne = async (name) => {
    try {
      rockersLoading = true;
      rockersError = "";
      const response = await fetch(`${baseUrl}/${name}`);
      if (response.ok) {
        const { babyRocker } = (await response.json()) || {};
        if (babyRocker) {
          rockers = [babyRocker];
        } else {
          rockersError = "Baby rocker not found";
        }
      } else {
        rockersError = await response.text();
      }
    } catch (err) {
      console.log(err);
      rockersError = err.message;
    } finally {
      rockersLoading = false;
    }
  };

  const fetchRockerss = async () => {
    page = 1;
    currentFilter = [];

    if (name) {
      await doFetchOne(name);
    } else {
      if (filter.hat) {
        currentFilter.push(`hat=${filter.hat}`);
      }
      if (filter.body) {
        currentFilter.push(`body=${filter.body}`);
      }
      if (filter.eyes) {
        currentFilter.push(`eyes=${filter.eyes}`);
      }
      if (filter.mouth) {
        currentFilter.push(`mouth=${filter.mouth}`);
      }
      if (filter.clothes) {
        currentFilter.push(`clothes=${filter.clothes}`);
      }
      if (filter.accessory) {
        currentFilter.push(`accessory=${filter.accessory}`);
      }
      if (filter.background) {
        currentFilter.push(`background=${filter.background}`);
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
  <h1>Baby rocker lookup</h1>
  <BabyRockerFilter
    {baseUrl}
    on:click={fetchRockerss}
    bind:aura={filter.head}
    bind:body={filter.body}
    bind:eyes={filter.eyes}
    bind:head={filter.mouth}
    bind:cargo={filter.clothes}
    bind:color={filter.accessory}
    bind:gender={filter.background}
    bind:sort
    bind:traits
    bind:name
  />
  {#if rockersLoading}
    <h2>Loading...</h2>
  {:else if rockersError}
    <p>Error: {rockersError}</p>
  {:else}
    <Modal>
      <BabyRockerList {rockers} {traits} bind:page on:updatePage={updatePage} />
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

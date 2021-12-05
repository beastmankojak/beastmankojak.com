<script>
  import Modal from "svelte-simple-modal";
  import BacSpaceshipFilter from "./BacSpaceshipFilter.svelte";
  import BacSpaceshipList from "./BacSpaceshipList.svelte";

  let spaceshipsLoading = false;
  let spaceshipsError = "";
  let spaceships = [];
  const allTraits = [
    "arms",
    "ship",
    "type",
    "cabin",
    "cargo",
    "effect",
    "lights",
    "weapon",
    "texture",
    "parasites",
    "background",
    "propulsion",
  ];

  const filter = {
    arms: "",
    ship: "",
    type: "",
    cabin: "",
    cargo: "",
    effect: "",
    lights: "",
    weapon: "",
    texture: "",
    parasites: "",
    background: "",
    propulsion: "",
  };
  let sort = "nameAsc";
  let name = "";
  let page = 1;
  let currentFilter;
  let traits = {};

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/bac-spaceship"
      : "http://localhost:3000/bac-spaceship";

  const doFetch = async (qs) => {
    try {
      spaceshipsLoading = true;
      spaceshipsError = "";
      const response = await fetch(
        qs.length ? `${baseUrl}/?${qs.join("&")}` : baseUrl
      );
      if (response.ok) {
        spaceships = await response.json();
      } else {
        spaceshipsError = await response.text();
      }
    } catch (err) {
      console.log(err);
      spaceshipsError = err.message;
    } finally {
      spaceshipsLoading = false;
    }
  };

  const doFetchOne = async (name) => {
    try {
      spaceshipsLoading = true;
      spaceshipsError = "";
      const response = await fetch(`${baseUrl}/${name}`);
      if (response.ok) {
        const { spaceship } = (await response.json()) || {};
        if (spaceship) {
          spaceships = [spaceship];
        } else {
          spaceshipsError = "Spaceship not found";
        }
      } else {
        spaceshipsError = await response.text();
      }
    } catch (err) {
      console.log(err);
      spaceshipsError = err.message;
    } finally {
      spaceshipsLoading = false;
    }
  };

  const fetchSpaceships = async () => {
    page = 1;
    currentFilter = [];

    if (name) {
      await doFetchOne(name);
    } else {
      for (const trait of allTraits) {
        if (filter[trait]) {
          currentFilter.push(`${trait}=${filter[trait]}`);
        }
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
  <h1>BAC Spaceship lookup</h1>
  <BacSpaceshipFilter
    {baseUrl}
    on:click={fetchSpaceships}
    bind:arms={filter.arms}
    bind:ship={filter.ship}
    bind:type={filter.type}
    bind:cabin={filter.cabin}
    bind:cargo={filter.cargo}
    bind:effect={filter.effect}
    bind:lights={filter.lights}
    bind:weapon={filter.weapon}
    bind:texture={filter.texture}
    bind:parasites={filter.parasites}
    bind:background={filter.background}
    bind:propulsion={filter.propulsion}
    bind:sort
    bind:traits
    bind:name
  />
  {#if spaceshipsLoading}
    <h2>Loading...</h2>
  {:else if spaceshipsError}
    <p>Error: {spaceshipsError}</p>
  {:else}
    <Modal>
      <BacSpaceshipList
        {spaceships}
        {traits}
        bind:page
        on:updatePage={updatePage}
      />
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

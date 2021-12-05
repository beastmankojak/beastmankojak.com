<script>
  import BabyRockerDropdown from "./BabyRockerDropdown.svelte";
  import { formatDate } from "../utils";
  export let baseUrl;

  export let hat;
  export let body;
  export let eyes;
  export let mouth;
  export let clothes;
  export let accessory;
  export let background;
  export let sort;
  export let traits;
  export let name;

  const fetchAttributes = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    traits = await response.json();
    return traits;
  };

  const reset = () => {
    hat = "";
    body = "";
    eyes = "";
    mouth = "";
    clothes = "";
    accessory = "";
    background = "";
    name = "";
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById("lfg").click();
    }
  };
</script>

{#await fetchAttributes()}
  <h2>Loading...</h2>
{:then attrs}
  <div>
    <p>
      Total baby rockers minted: {attrs.stats.totalCount} / 3333, last updated at
      {formatDate(attrs.stats.lastUpdate)}
    </p>
    <p><a href="rarity.html">Trait rarity chart</a></p>
    <ul>
      <li>
        <BabyRockerDropdown
          bind:value={hat}
          id="hatDropdown"
          label="Hat"
          attributes={attrs.attributes.hat}
        />
      </li>
      <li>
        <BabyRockerDropdown
          bind:value={body}
          id="bodyDropdown"
          label="Body"
          attributes={attrs.attributes.body}
        />
      </li>
      <li>
        <BabyRockerDropdown
          bind:value={eyes}
          id="eyesDropdown"
          label="Eyes"
          attributes={attrs.attributes.eyes}
        />
      </li>
      <li>
        <BabyRockerDropdown
          bind:value={mouth}
          id="mouthDropdown"
          label="Mouth"
          attributes={attrs.attributes.mouth}
        />
      </li>
      <li>
        <BabyRockerDropdown
          bind:value={clothes}
          id="clothesDropdown"
          label="Clothes"
          attributes={attrs.attributes.clothes}
        />
      </li>
      <li>
        <BabyRockerDropdown
          bind:value={accessory}
          id="accessoryDropdown"
          label="Accessory"
          attributes={attrs.attributes.accessory}
        />
      </li>
      <li>
        <BabyRockerDropdown
          bind:value={background}
          id="backgroundDropdown"
          label="Background"
          attributes={attrs.attributes.background}
        />
      </li>
      <li>
        <label for="sortDropdown">Sort</label>
        <select bind:value={sort} id="sortDropdown">
          <option value="nameAsc">Name ⬆️</option>
          <option value="nameDesc">Name ⬇️</option>
          <option value="rankAsc">Rank ⬆️</option>
          <option value="rankDesc">Rank ⬇️</option>
        </select>
      </li>
      <li>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          bind:value={name}
          on:keypress={handleKeypress}
        />
      </li>
    </ul>
    <button on:click id="lfg">LFG</button>
    <button on:click={reset}>Reset</button>
  </div>
{:catch err}
  <p>Error: {err}</p>
{/await}

<style>
  button {
    font-style: italic;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 0px;
  }
  li {
    list-style-type: none;
  }
  label {
    display: inline;
  }
</style>

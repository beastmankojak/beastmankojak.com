<script>
  import BacSpaceshipDropdown from "./BacSpaceshipDropdown.svelte";
  import { formatDate } from "../utils";
  export let baseUrl;

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

  export let arms;
  export let ship;
  export let type;
  export let cabin;
  export let cargo;
  export let effect;
  export let lights;
  export let weapon;
  export let texture;
  export let parasites;
  export let background;
  export let propulsion;
  export let sort;
  export let traits;
  export let name;

  const fetchAttributes = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    traits = await response.json();
    return traits;
  };

  const reset = () => {
    arms = "";
    ship = "";
    type = "";
    cabin = "";
    cargo = "";
    effect = "";
    lights = "";
    weapon = "";
    texture = "";
    parasites = "";
    background = "";
    propulsion = "";
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
      Total spaceships minted: {attrs.stats.totalCount} / 10000, last updated at
      {formatDate(attrs.stats.lastUpdate)}
    </p>
    <p><a href="rarity.html">Trait rarity chart</a></p>
    <ul>
      <li>
        <BacSpaceshipDropdown
          bind:value={arms}
          id="armsDropdown"
          label="Arms"
          attributes={attrs.attributes.arms}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={ship}
          id="shipDropdown"
          label="Ship"
          attributes={attrs.attributes.ship}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={type}
          id="typeDropdown"
          label="Type"
          attributes={attrs.attributes.type}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={cabin}
          id="cabinDropdown"
          label="Cabin"
          attributes={attrs.attributes.cabin}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={cargo}
          id="cargoDropdown"
          label="Cargo"
          attributes={attrs.attributes.cargo}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={effect}
          id="effectDropdown"
          label="Effect"
          attributes={attrs.attributes.effect}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={lights}
          id="lightsDropdown"
          label="Lights"
          attributes={attrs.attributes.lights}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={weapon}
          id="weaponDropdown"
          label="Weapon"
          attributes={attrs.attributes.weapon}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={texture}
          id="textureDropdown"
          label="Texture"
          attributes={attrs.attributes.texture}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={parasites}
          id="parasitesDropdown"
          label="Parasites"
          attributes={attrs.attributes.parasites}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={background}
          id="backgroundDropdown"
          label="Background"
          attributes={attrs.attributes.background}
        />
      </li>
      <li>
        <BacSpaceshipDropdown
          bind:value={propulsion}
          id="propulsionDropdown"
          label="Propulsion"
          attributes={attrs.attributes.propulsion}
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

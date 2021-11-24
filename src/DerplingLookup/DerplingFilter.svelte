<script>
  import DerplingDropdown from "./DerplingDropdown.svelte";
  export let baseUrl;

  export let aura;
  export let beak;
  export let body;
  export let eyes;
  export let head;
  export let cargo;
  export let color;
  export let gender;
  export let eggshell;
  export let pedestal;
  export let basecolor;
  export let dadbodTag;
  export let twins;
  export let sort;
  export let traits;
  export let derplingId;

  const fetchAttributes = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    traits = await response.json();
    return traits;
  };

  const reset = () => {
    aura = "";
    beak = "";
    body = "";
    eyes = "";
    head = "";
    cargo = "";
    color = "";
    gender = "";
    eggshell = "";
    pedestal = "";
    basecolor = "";
    dadbodTag = "";
    twins = "";
    derplingId = "";
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
      Total derplings hatched: {attrs.stats.totalCount}, last updated at {attrs
        .stats.lastUpdate}
    </p>
    <ul>
      <li>
        <DerplingDropdown
          bind:value={aura}
          id="auraDropdown"
          label="Aura"
          attributes={attrs.attributes.aura}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={beak}
          id="beakDropdown"
          label="Beak"
          attributes={attrs.attributes.beak}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={body}
          id="bodyDropdown"
          label="Body"
          attributes={attrs.attributes.body}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={eyes}
          id="eyesDropdown"
          label="Eyes"
          attributes={attrs.attributes.eyes}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={head}
          id="headDropdown"
          label="Head"
          attributes={attrs.attributes.head}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={cargo}
          id="cargoDropdown"
          label="Cargo"
          attributes={attrs.attributes.cargo}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={color}
          id="colorDropdown"
          label="Color"
          attributes={attrs.attributes.color}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={gender}
          id="genderDropdown"
          label="Sex"
          attributes={attrs.attributes.gender}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={eggshell}
          id="eggshellDropdown"
          label="Eggshell"
          attributes={attrs.attributes.eggshell}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={pedestal}
          id="pedestalDropdown"
          label="Pedestal"
          attributes={attrs.attributes.pedestal}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={basecolor}
          id="basecolorDropdown"
          label="Basecolor"
          attributes={attrs.attributes.basecolor}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={dadbodTag}
          id="dadbodTagDropdown"
          label="Dadbod tag"
          attributes={attrs.attributes.dadbodTag}
        />
      </li>
      <li>
        <DerplingDropdown
          bind:value={twins}
          id="twinsDropdown"
          label="Twins"
          attributes={attrs.attributes.twins}
        />
      </li>
      <li>
        <label for="sortDropdown">Sort</label>
        <select bind:value={sort} id="sortDropdown">
          <option value="hatchAsc">Hatch order ⬆️</option>
          <option value="hatchDesc">Hatch order ⬇️</option>
          <option value="derplingIdAsc">Derpling id ⬆️</option>
          <option value="derplingIdDesc">Derpling id ⬇️</option>
          <option value="rankAsc">Rank ⬆️</option>
          <option value="rankDesc">Rank ⬇️</option>
        </select>
      </li>
      <li>
        <label for="derplingId">Derpling Id</label>
        <input
          type="text"
          id="derplingId"
          bind:value={derplingId}
          on:keypress={handleKeypress}
        />
      </li>
    </ul>
    <div class="warning">
      🚨 Ranking is currently experimental, trust it at your own peril. The
      current algorithm compresses the trait rarity range from [0 - 1] to [0.02
      - 1] to avoid the multiplicative inverse hockey stick for very rare traits
      and ignores the following traits all together: sex, basecolor, dadbodTag.
      🚨
    </div>
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
  .warning {
    font-weight: bold;
    color: darkred;
    margin-bottom: 1em;
  }
  label {
    display: inline;
  }
</style>

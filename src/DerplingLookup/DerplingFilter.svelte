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

  const fetchAttributes = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    return await response.json();
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
    </ul>
    <button on:click>LFG</button>
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
</style>

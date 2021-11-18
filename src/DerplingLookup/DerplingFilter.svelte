<script>
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

  const fetchAttributes = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    return await response.json();
  };
</script>

{#await fetchAttributes()}
  <h2>Loading...</h2>
{:then attributes}
  <div>
    <ul>
      <li>
        <label for="auraDropdown">Aura</label>
        <select bind:value={aura} id="auraDropdown">
          <option value="">Any</option>
          {#each attributes.aura as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="beakDropdown">Beak</label>
        <select bind:value={beak} id="beakDropdown">
          <option value="">Any</option>
          {#each attributes.beak as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="bodyDropdown">Body</label>
        <select bind:value={body} id="bodyDropdown">
          <option value="">Any</option>
          {#each attributes.body as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="eyesDropdown">Eyes</label>
        <select bind:value={eyes} id="eyesDropdown">
          <option value="">Any</option>
          {#each attributes.eyes as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="headDropdown">Head</label>
        <select bind:value={head} id="">
          <option value="">Any</option>
          {#each attributes.head as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="cargo">Cargo</label>
        <select bind:value={cargo} id="">
          <option value="">Any</option>
          {#each attributes.cargo as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="colorDropdown">Color</label>
        <select bind:value={color} id="colorDropdown">
          <option value="">Any</option>
          {#each attributes.color as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="genderDropdown">Sex</label>
        <select bind:value={gender} id="genderDropdown">
          <option value="">Any</option>
          {#each attributes.gender as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="eggshellDropdown">Eggshell</label>
        <select bind:value={eggshell} id="eggshellDropdown">
          <option value="">Any</option>
          {#each attributes.eggshell as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="pedestalDropdoen">Pedestal</label>
        <select bind:value={pedestal} id="pedestalDropdown">
          <option value="">Any</option>
          {#each attributes.pedestal as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="basecolorDropdown">Basecolor</label>
        <select bind:value={basecolor} id="basecolorDropdown">
          <option value="">Any</option>
          {#each attributes.basecolor as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
      <li>
        <label for="dadbodTagDropdown">DadbodTag</label>
        <select bind:value={dadbodTag} id="dadbodTagDropdown">
          <option value="">Any</option>
          {#each attributes.dadbodTag as value}
            <option value={encodeURIComponent(value)}>{value}</option>
          {/each}
        </select>
      </li>
    </ul>
    <button on:click>LFG</button>
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

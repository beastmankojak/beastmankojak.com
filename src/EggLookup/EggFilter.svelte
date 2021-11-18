<script>
  export let symbol;
  export let perfect;
  export let xChromo;
  export let yChromo;
  export let parentPerfect;
  export let sort;
</script>

<div>
  <ul>
    <li>
      <label for="symbolDropdown">Symbol</label>
      <select bind:value={symbol} id="symbolDropdown">
        <option value="">Any</option>
        <option value="▽">▽</option>
        <option value="▢">▢</option>
      </select>
    </li>
    <li>
      <label for="perfectDropdown">Perfect</label>
      <select bind:value={perfect} id="perfectDropdown">
        <option value="">Any</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
        <option value="redneck">Redneck</option>
        <option value="dave">Dave</option>
        <option value="stoner">Stoner</option>
        <option value="dj">DJ</option>
        <option value="diety">Diety</option>
        <option value="astro">Astro</option>
        <option value="viking">Viking</option>
        <option value="ghost">Ghost</option>
        <option value="corpo">Corpo</option>
        <option value="magic">Magic</option>
        <option value="monk">Monk</option>
        <option value="ninja">Ninja</option>
        <option value="scientist">Mad Scientist</option>
        <option value="cyborg">Cyborg</option>
        <option value="buff">Buff</option>
      </select>
    </li>
    <li>
      <label for="xChromoDropdown">X Chromosome</label>
      <select bind:value={xChromo} id="xChromoDropdown">
        <option value="">Any</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="crazy">CrAzY</option>
      </select>
    </li>
    <li>
      <label for="parentTextbox">Parent</label>
      <input type="text" id="parentTextbox" bind:value={yChromo} />
    </li>
    <li>
      <label for="parentPerfectDropdown">Parent Perfect</label>
      <select bind:value={parentPerfect} id="parentPerfectDropdown">
        <option value="">Any</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
        <option value="redneck">Redneck</option>
        <option value="dave">Dave</option>
        <option value="stoner">Stoner</option>
        <option value="dj">DJ</option>
        <option value="diety">Diety</option>
        <option value="astro">Astro</option>
        <option value="viking">Viking</option>
        <option value="ghost">Ghost</option>
        <option value="corpo">Corpo</option>
        <option value="magic">Magic</option>
        <option value="monk">Monk</option>
        <option value="ninja">Ninja</option>
        <option value="scientist">Mad Scientist</option>
        <option value="cyborg">Cyborg</option>
        <option value="buff">Buff</option>
      </select>
    </li>
    <li>
      <label for="sortDropdown">Sort</label>
      <select bind:value={sort} id="sortDropdown">
        <option value="eggIdAsc">Egg Id ⬆️</option>
        <option value="eggIdDesc">Egg Id ⬇️</option>
      </select>
    </li>
  </ul>
  <button on:click>LFG</button>
</div>

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

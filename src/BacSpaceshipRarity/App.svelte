<script>
  import Totals from "./Totals.svelte";
  import TraitTable from "./TraitTable.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/bac-spaceship"
      : "http://localhost:3000/bac-spaceship";

  const fetchRarity = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    if (!response.ok) {
      throw new Error(
        `${response.status} ${response.statusText}: ${await response.text()}`
      );
    }
    return await response.json();
  };

  const getAttributes = (attrs) =>
    attrs.map(({ label }) => {
      const [, name, count, pct] = label.match(
        /(.*)\s+\((\d+)\s+\/\s+([\d\.%]+)\)/
      );
      return { name, count, pct };
    });

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

  const titleCase = (trait) => {
    const [first, ...rest] = trait;
    return [first.toUpperCase(), ...rest].join("");
  };
</script>

{#await fetchRarity()}
  <h2>Loading...</h2>
{:then rarity}
  <h1>Unofficial BAC Spaceship rarity chart</h1>
  <div>
    <p>This is an unofficial, community-driven BAC Spaceship rarity chart.</p>
  </div>
  <Totals totals={rarity.stats} />

  {#each allTraits as trait}
    <TraitTable
      caption={titleCase(trait)}
      attributes={getAttributes(rarity.attributes[trait])}
    />
  {/each}
{:catch err}
  <p>Error: {err}</p>
{/await}

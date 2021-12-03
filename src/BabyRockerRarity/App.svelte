<script>
  import Totals from "./Totals.svelte";
  import TraitTable from "./TraitTable.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/baby-rocker"
      : "http://localhost:3000/baby-rocker";

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
</script>

{#await fetchRarity()}
  <h2>Loading...</h2>
{:then rarity}
  <h1>Unofficial baby rocker rarity chart</h1>
  <div>
    <p>This is the unofficial, community-driven baby rocker rarity chart.</p>
  </div>
  <Totals totals={rarity.stats} />
  <TraitTable caption="Hat" attributes={getAttributes(rarity.attributes.hat)} />
  <TraitTable
    caption="Body"
    attributes={getAttributes(rarity.attributes.body)}
  />
  <TraitTable
    caption="Eyes"
    attributes={getAttributes(rarity.attributes.eyes)}
  />
  <TraitTable
    caption="Mouth"
    attributes={getAttributes(rarity.attributes.mouth)}
  />
  <TraitTable
    caption="Clothes"
    attributes={getAttributes(rarity.attributes.clothes)}
  />
  <TraitTable
    caption="Accessory"
    attributes={getAttributes(rarity.attributes.accessory)}
  />
  <TraitTable
    caption="Background"
    attributes={getAttributes(rarity.attributes.background)}
  />
{:catch err}
  <p>Error: {err}</p>
{/await}

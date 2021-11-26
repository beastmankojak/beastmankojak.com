<script>
  import Totals from "./Totals.svelte";
  import TraitTable from "./TraitTable.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/derplings"
      : "http://localhost:3000/derplings";

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
  <h1>Unofficial derpling rarity chart</h1>
  <div>
    <p>This is the unofficial, community-driven derpling rarity chart.</p>
  </div>
  <Totals totals={rarity.stats} />
  <TraitTable
    caption="Aura"
    attributes={getAttributes(rarity.attributes.aura)}
  />
  <TraitTable
    caption="Beak"
    attributes={getAttributes(rarity.attributes.beak)}
  />
  <TraitTable
    caption="Body"
    attributes={getAttributes(rarity.attributes.body)}
  />
  <TraitTable
    caption="Eyes"
    attributes={getAttributes(rarity.attributes.eyes)}
  />
  <TraitTable
    caption="Head"
    attributes={getAttributes(rarity.attributes.head)}
  />
  <TraitTable
    caption="Cargo"
    attributes={getAttributes(rarity.attributes.cargo)}
  />
  <TraitTable
    caption="Color"
    attributes={getAttributes(rarity.attributes.color)}
  />
  <TraitTable
    caption="Gender"
    attributes={getAttributes(rarity.attributes.gender)}
  />
  <TraitTable
    caption="Eggshell"
    attributes={getAttributes(rarity.attributes.eggshell)}
  />
  <TraitTable
    caption="Pedestal"
    attributes={getAttributes(rarity.attributes.pedestal)}
  />
  <TraitTable
    caption="Basecolor"
    attributes={getAttributes(rarity.attributes.basecolor)}
  />
  <TraitTable
    caption="Dadbod tag"
    attributes={getAttributes(rarity.attributes.dadbodTag)}
  />
{:catch err}
  <p>Error: {err}</p>
{/await}

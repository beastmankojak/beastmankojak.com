<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/bac-spaceship"
      : "http://localhost:3000/bac-spaceship";

  const traitList = [
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

  const totalCount = 3735;
</script>

<RarityApp
  title="Unofficial BAC Spaceship rarity chart"
  description="This is an unofficial, community-driven BAC Spaceship rarity chart."
  {baseUrl}
  {traitList}
  {totalCount}
/>

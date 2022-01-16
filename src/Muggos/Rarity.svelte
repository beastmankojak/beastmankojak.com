<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/muggos"
      : "http://localhost:3000/muggos";

  const traitList = [
    "Muggo Back",
    "Muggo Head",
    "Muggo Rank",
    "Muggo Color",
    "Muggo Accessory",
    "Muggo Background",
    "Muggo Foreground",
    "Muggo Gameplay Proficiency",
    "Color Matched",
    "Sidekick",
    "Sidekick Gem",
    "Sidekick Ears",
    "Sidekick Horn",
    "Sidekick Nose",
    "Sidekick Teeth",
    "Sidekick Tummy",
    "Sidekick Wings",
  ];

  const totalCount = 1200;
</script>

<RarityApp
  title="Muggos rarity chart"
  description="Rarity chart for muggos that have been minted so far"
  {baseUrl}
  {traitList}
  {totalCount}
/>

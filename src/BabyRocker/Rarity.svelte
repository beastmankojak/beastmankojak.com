<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/baby-rocker"
      : "http://localhost:3000/baby-rocker";

  const traitList = [
    "hat",
    "body",
    "eyes",
    "mouth",
    "clothes",
    "accessory",
    "background",
  ];

  const totalCount = 3333;
</script>

<RarityApp
  title="Unofficial Baby Rocker rarity chart"
  description="This is an unofficial, community-driven Baby Rocker rarity chart."
  {baseUrl}
  {traitList}
  {totalCount}
/>

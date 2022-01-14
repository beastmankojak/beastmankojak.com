<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/bac-christmas"
      : "http://localhost:3000/bac-christmas";

  const traitList = [
    "hat",
    "body",
    "eyes",
    "face",
    "clothes",
    "texture",
    "accessory",
    "background",
  ];

  const totalCount = 300;
</script>

<RarityApp
  title="Unofficial BAC Christmas rarity chart"
  description="This is the unofficial, community-driven BAC Christmas rarity chart."
  {baseUrl}
  {traitList}
  {totalCount}
/>

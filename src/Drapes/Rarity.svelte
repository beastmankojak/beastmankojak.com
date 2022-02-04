<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/drapes"
      : "http://localhost:3000/drapes";

  const traitList = [
    'Fur', 'Body', 'Ears', 'Eyes', 'Head', 'Skin', 'Mouth', 'Background',
  ];

  const totalCount = 8888;
</script>

<RarityApp
  title="Drapes rarity chart"
  description="Rarity chart for Drapes that have been minted so far"
  {baseUrl}
  {traitList}
  {totalCount}
/>

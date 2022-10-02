<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/baldo"
      : "http://localhost:3000/baldo";

  const traitList = [
    'Beak', 'Body', 'Eyes', 'Head', 'Mouth', 'Background',
  ];

  const totalCount = 420;
</script>

<RarityApp
  title="Baldo rarity chart"
  description="Rarity chart for Baldos that have been minted so far"
  {baseUrl}
  {traitList}
  {totalCount}
/>

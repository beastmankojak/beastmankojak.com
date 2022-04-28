<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/pred"
      : "http://localhost:3000/pred";

  const traitList = [
    'Body', 'Eyes', 'Head', 'Rank', 'Head Gear', 'Back Gear', 'Front Gear', 'Background', 'Skin Color', 'Adaptive Color',
  ];

  const totalCount = 5000;
</script>

<RarityApp
  title="Pred rarity chart"
  description="Rarity chart for Pred that have been minted so far"
  {baseUrl}
  {traitList}
  {totalCount}
/>

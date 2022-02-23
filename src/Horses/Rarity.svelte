<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/horses"
      : "http://localhost:3000/horses";

  const traitList = [
    'Back Left Leg', 'Back Right Leg', 'Body', 'Color', 'Front Left Leg', 'Front Right Leg', 'Gender', 'Head',
  ];

  const totalCount = 14125;
</script>

<RarityApp
  title="Equine Horses rarity chart"
  description="Unofficial rarity chart for horse attributes"
  {baseUrl}
  {traitList}
  {totalCount}
/>

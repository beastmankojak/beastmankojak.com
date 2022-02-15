<script>
  import RarityApp from "@beastmankojak/cnft-svelte-components/components/RarityApp/App.svelte";

  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/derplings"
      : "http://localhost:3000/derplings";

  const traitList = [
    'aura', 'beak', 'body', 'eyes', 'head', 'cargo', 'color', 'gender', 
    'eggshell', 'pedestal', 'basecolor', 'dadbodTag', 'twins',
  ];

  const totalCount = 7500;
</script>

<RarityApp
  title="Derplings rarity chart"
  description="Rarity chart for Derplings that have been minted so far"
  {baseUrl}
  {traitList}
  {totalCount}
/>

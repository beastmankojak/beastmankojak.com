<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    'Fur', 'Body', 'Ears', 'Eyes', 'Head', 'Skin', 'Mouth', 'Background',
  ];

  const project = "Drapes";
  const alt = "Drapes";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/drapes"
      : "http://localhost:3000/drapes";
  const assetTag = "drape";
  const title = "Drapes Lookup";
  const totalCount = 8888;
  const policyId = "f4873b426a498350c579690bd1f4a369d5d7b521c778acf322f77334";
  const verified = true;
  const assetTransform = (assetName) => assetName.replace(' #', '');
  const disclaimer = 'Stats/rarities will change as more Drapes are minted';
</script>

<LookupApp
  {traitList}
  {project}
  {alt}
  {baseUrl}
  {assetTag}
  {title}
  {totalCount}
  {policyId}
  {verified}
  {assetTransform}
  {disclaimer}
/>

<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    'Fur', 'Body', 'Ears', 'Eyes', 'Head', 'Skin', 'Mouth', 'Background',
  ];

  const project = "Derp Apes";
  const alt = "Drapes";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/drapes"
      : "http://localhost:3000/drapes";
  const assetTag = "drapes";
  const title = "Drapes Lookup";
  const totalCount = 8888;
  const policyId = "f4873b426a498350c579690bd1f4a369d5d7b521c778acf322f77334";
  const verified = true;
  const assetTransform = (assetName) => `DRAPE${assetName.slice(-5)}`;
  const disclaimer = 'Stats/rarities will change as more Drapes are minted';
  const placeholder = 'drape-loading.png';
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
  {placeholder}
/>

<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    'Beak', 'Body', 'Eyes', 'Head', 'Mouth', 'Background',
  ];

  const project = "The Baldo Collective";
  const alt = "The Baldo Collective";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/baldo"
      : "http://localhost:3000/baldo";
  const assetTag = "baldos";
  const title = "Baldo Lookup";
  const totalCount = 420;
  // const policyId = "73056bffdf28f82da5db1f5ac7c06d030c8a551f43889f7f85746a4a";
  // const verified = true;
  // const assetTransform = (assetName) => `PRED${assetName.slice(-5)}`;
  const disclaimer = 'Stats/rarities will change as more Baldos are minted';
  const placeholder = 'baldo-loading.png';
  const imageUrl = (asset) => `https://beastmankojak.nyc3.cdn.digitaloceanspaces.com/derp/baldo/ipfs/${asset.image.replace('ipfs://', '')}/200.png`;
</script>

<LookupApp
  {traitList}
  {project}
  {alt}
  {baseUrl}
  {assetTag}
  {title}
  {totalCount}
  {disclaimer}
  {placeholder}
  {imageUrl}
/>

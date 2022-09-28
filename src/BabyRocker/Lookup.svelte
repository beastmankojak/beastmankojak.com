<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    "hat",
    "body",
    "eyes",
    "mouth",
    "clothes",
    "accessory",
    "background",
  ];

  const project = "BabyAlienClub Rock";
  const alt = "Baby rocker";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/baby-rocker"
      : "http://localhost:3000/baby-rocker";
  const assetTag = "babyRocker";
  const title = "Baby Rocker Lookup";
  const totalCount = 3333;
  const policyId = "3c1169f0336f60c46aa0651bd8130c8f35a001005cf7599bb25d7cf8";
  const verified = true;
  // const assetTransform = (assetName) => `BACSpaceships${assetName.slice(-5, -1)}`;
  const placeholder = 'bac-rock-loading.png';
  const imageUrl = (asset) => `https://beastmankojak.nyc3.cdn.digitaloceanspaces.com/bac/babyRockers/ipfs/${asset.image.replace('ipfs://', '')}/200.png`;
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
  {placeholder}
  {imageUrl}
/>

<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    "arms",
    "ship",
    "type",
    "cabin",
    "cargo",
    "effect",
    "lights",
    "weapon",
    "texture",
    "parasites",
    "background",
    "propulsion",
  ];

  const project = "BabyAlienClub Spaceships";
  const alt = "BAC Spaceship";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/bac-spaceship"
      : "http://localhost:3000/bac-spaceship";
  const assetTag = "spaceship";
  const title = "BAC Spaceship lookup";
  const totalCount = 3735;
  const policyId = "3fdc0ae45c37eb0917acd296fa296d7cf264faa4c90b058e90ddc0d8";
  const verified = true;
  const assetTransform = (assetName) => `BACSpaceships${assetName.slice(-5, -1)}`;
  const placeholder = 'bac-spaceship-loading.png';
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
  {placeholder}
/>

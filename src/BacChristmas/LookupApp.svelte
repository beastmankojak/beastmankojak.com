<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    "hat",
    "body",
    "eyes",
    "face",
    "clothes",
    "texture",
    "accessory",
    "background",
  ];
  const project = "BabyAlienChristmas";
  const alt = "BAC Christmas";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/bac-christmas"
      : "http://localhost:3000/bac-christmas";
  const assetTag = "bacChristmas";
  const title = "BAC Christmas Lookup";
  const totalCount = 300;
  const policyId = "2f641f799b2a8fde7a4d3659765f5bbee2f853db32b86668917e3c77";
  const placeholder = 'bac-christmas-loading.png';
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
  {placeholder}
/>

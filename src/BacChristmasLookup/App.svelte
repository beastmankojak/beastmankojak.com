<script>
  import LookupApp from "../common/LookupApp.svelte";

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
</script>

<LookupApp
  {traitList}
  {project}
  {alt}
  {baseUrl}
  {assetTag}
  {title}
  {totalCount}
/>

<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    "Muggo Back",
    "Muggo Head",
    "Muggo Rank",
    "Muggo Color",
    "Muggo Accessory",
    "Muggo Background",
    "Muggo Foreground",
    "Muggo Gameplay Proficiency",
    "Color Matched",
    "Sidekick",
    "Sidekick Gem",
    "Sidekick Ears",
    "Sidekick Horn",
    "Sidekick Nose",
    "Sidekick Teeth",
    "Sidekick Tummy",
    "Sidekick Wings",
  ];

  const project = "Muggos";
  const alt = "Muggos";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/muggos"
      : "http://localhost:3000/muggos";
  const assetTag = "muggo";
  const title = "Muggo Lookup";
  const totalCount = 1200;
  const policyId = "c263bfde10889d62d63b158bed9906795226c044138ee490f1b785d4";
  const verified = true;
  const assetTransform = (assetName) => assetName.replace(' #', '');
  const disclaimer = 'Rarity shown here is not final.  The Muggos are currently in the early stages and rarity tables will not be final until all Muggos are minted!  This is for entertainment purposes only!';
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

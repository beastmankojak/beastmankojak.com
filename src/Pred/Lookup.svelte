<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    'Body', 'Eyes', 'Head', 'Rank', 'Head Gear', 'Back Gear', 'Front Gear', 'Background', 'Skin Color', 'Adaptive Color',
  ];

  const project = "Pred";
  const alt = "Pred";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/pred"
      : "http://localhost:3000/pred";
  const assetTag = "preds";
  const title = "Pred Lookup";
  const totalCount = 5000;
  const policyId = "73056bffdf28f82da5db1f5ac7c06d030c8a551f43889f7f85746a4a";
  const verified = true;
  const assetTransform = (assetName) => `PRED${assetName.slice(-5)}`;
  const disclaimer = 'Stats/rarities will change as more Preds are minted';
  const placeholder = 'pred-loading.png';
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

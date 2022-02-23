<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    'Back Left Leg', 'Back Right Leg', 'Body', 'Color', 'Front Left Leg', 'Front Right Leg', 'Gender', 'Head',
  ];

  const numericTraitList = [
    'Age', 'acceleration', 'agility', 'endurance', 'speed', 'stamina', 'total'
  ];

  const project = "EquineNFT Pioneer Horses";
  const alt = "Equine Horse";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/horses"
      : "http://localhost:3000/horses";
  const assetTag = "horses";
  const title = "Equine Horses Lookup";
  const totalCount = 14125;
  const policyId = "30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b";
  const verified = true;
  const assetTransform = (assetName) => `EquinePioneerHorse${assetName.slice(-6, -1)}`;
  // const disclaimer = 'Stats/rarities will change as more Drapes are minted';
  const placeholder = 'pioneer-horse-loading.png';
  const customSort = {
    defaultSort: 'nameAsc',
    sortOptions: [
      { value: 'nameAsc', label: 'Name ⬆️' },
      { value: 'nameDesc', label: 'Name ⬇️' },
      { value: 'rankAsc', label: 'Rank ⬆️' },
      { value: 'rankDesc', label: 'Rank ⬇️' },
      { value: 'totalAsc', label: 'Stats Total ⬆️' },
      { value: 'totalDesc', label: 'Stats Total ⬇️' },
    ]
  }

</script>

<div>
<LookupApp
  {traitList}
  {numericTraitList}
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
  {customSort}
/>
</div>

<style>
  div :global(.wrap ul :nth-last-child(3)),
  div :global(.wrap ul :nth-last-child(10)) {
    margin-top: 10px;
  }
</style>
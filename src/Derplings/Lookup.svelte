<script>
  import LookupApp from "@beastmankojak/cnft-svelte-components/components/LookupApp/App.svelte";

  const traitList = [
    'aura', 'beak', 'body', 'eyes', 'head', 'cargo', 'color', 'gender', 
    'eggshell', 'pedestal', 'basecolor', 'dadbodTag', 'twins',
  ];

  const displayTraitList =  traitList.slice(0, -1);

  const project = "Derplings";
  const alt = "Derplings";
  const baseUrl =
    process.env.NODE_ENV === "prod"
      ? "https://www.beastmankojak.com/api/derplings"
      : "http://localhost:3000/derplings";
  const assetTag = "derpling";
  const title = "Derplings Lookup";
  const totalCount = 7500;
  const policyId = "b2d25f829ebb7f4c97b5e847923a1115b23ebf78000722c229c9c9f7";
  const verified = true;
  // const assetTransform = (assetName) => `DRAPE${assetName.slice(-5)}`;
  const disclaimer = 'Ranking has been tweaked based on community input.';
  const placeholder = 'derpling-loading.png';
  const customSort = {
    defaultSort: 'hatchAsc',
    sortOptions: [
      { value: 'hatchAsc', label: 'Hatch order ⬆️' },
      { value: 'hatchDesc', label: 'Hatch order ⬇️' },
      { value: 'derplingIdAsc', label: 'Derpling id ⬆️' },
      { value: 'derplingIdDesc', label: 'Derpling id ⬇️' },
      { value: 'rankAsc', label: 'Rank ⬆️' },
      { value: 'rankDesc', label: 'Rank ⬇️' },
    ]
  }
  const marketplaceSearchParam = 'derplingId';
</script>

<LookupApp
  {traitList}
  {displayTraitList}
  {project}
  {alt}
  {baseUrl}
  {assetTag}
  {title}
  {totalCount}
  {policyId}
  {verified}
  {disclaimer}
  {placeholder}
  {customSort}
  {marketplaceSearchParam}
/>

<script>
  export let spaceship;
  export let traits;
  const ipfs = () => spaceship.image.replace("ipfs://", "");
  // const ipfsParent = () => egg.parent.image.replace("ipfs://", "");
  const display = (trait, value) =>
    traits.attributes[trait].filter(({ value: val }) => val === value)[0].label;
  const allTraits = [
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

  const escape = (name) => name.replace("[", "\\[").replace("]", "\\]");
  const assetIdToName = (assetId) => `BAC Spaceship [${assetId.slice(-4)}]`;

  const searchForSale = async (name) => {
    const response = await fetch("https://api.cnft.io/market/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: escape(name),
        types: ["listing", "auction", "offer"],
        project: "BabyAlienClub Spaceships",
        sort: { price: -1 },
        priceMin: null,
        priceMax: null,
        page: 1,
        verified: true,
        nsfw: false,
        sold: false,
      }),
    });
    if (!response.ok) {
      throw new Error(
        `${response.status} ${response.statusText}: ${await response.text()}`
      );
    }
    const { results } = await response.json();
    const [result] = results;
    const {
      _id,
      asset: { assetId },
      price,
    } = result || { asset: {} };
    return result && assetIdToName(assetId) === name
      ? {
          forSale: true,
          href: `https://cnft.io/token/${_id}`,
          price: price / 1000000,
        }
      : { forSale: false };
  };

  const titleCase = (trait) => {
    const [first, ...rest] = trait;
    return [first.toUpperCase(), ...rest].join("");
  };
</script>

<div>
  <h2>{spaceship.name}</h2>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="BAC Spaceship" />
  <ul>
    {#each allTraits as trait}
      <li>
        <span>&nbsp;{titleCase(trait)}:</span>
        {display(trait, spaceship[trait])}
      </li>
    {/each}
    <li><span>&nbsp;Rank:</span> {spaceship.rank}</li>
    <li><span>&nbsp;Rarity score:</span> {spaceship.rarityScore.toFixed(2)}</li>
    <li>
      <span>&nbsp;For sale:</span>
      {#await searchForSale(spaceship.name)}
        Loading...
      {:then listing}{#if listing.forSale}
          <a href={listing.href} target="_blank">{listing.price} ₳</a>
        {:else}
          Not for sale
        {/if}
      {:catch err}
        Error: {err}
      {/await}
    </li>
  </ul>
</div>

<style>
  div {
    text-align: left;
  }
  img {
    height: 200px;
    width: 200px;
    float: left;
  }
  li {
    list-style-type: none;
  }
  ul {
    padding: 0px;
  }
  span {
    display: inline-block;
    width: 7em;
    font-weight: bold;
  }
</style>

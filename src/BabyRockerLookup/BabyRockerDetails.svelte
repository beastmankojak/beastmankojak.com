<script>
  export let rocker;
  export let traits;
  const ipfs = () => rocker.image.replace("ipfs://", "");
  // const ipfsParent = () => egg.parent.image.replace("ipfs://", "");
  const display = (trait, value) =>
    traits.attributes[trait].filter(({ value: val }) => val === value)[0].label;

  const searchForSale = async (name) => {
    const response = await fetch("https://api.cnft.io/market/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: name,
        types: ["listing", "auction", "offer"],
        project: "BabyAlienClub Rock",
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
    return result && assetId === name
      ? {
          forSale: true,
          href: `https://cnft.io/token/${_id}`,
          price: price / 1000000,
        }
      : { forSale: false };
  };
</script>

<div>
  <h2>{rocker.name}</h2>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="Baby rocker" />
  <ul>
    <li><span>&nbsp;Hat:</span> {display("hat", rocker.hat)}</li>
    <li><span>&nbsp;Body:</span> {display("body", rocker.body)}</li>
    <li><span>&nbsp;Eyes:</span> {display("eyes", rocker.eyes)}</li>
    <li><span>&nbsp;Mouth:</span> {display("mouth", rocker.mouth)}</li>
    <li><span>&nbsp;Clothes:</span> {display("clothes", rocker.clothes)}</li>
    <li>
      <span>&nbsp;Accessory:</span>
      {display("accessory", rocker.accessory)}
    </li>
    <li>
      <span>&nbsp;Background:</span>
      {display("background", rocker.background)}
    </li>
    <li><span>&nbsp;Rank:</span> {rocker.rank}</li>
    <li><span>&nbsp;Rarity score:</span> {rocker.rarityScore.toFixed(2)}</li>
    <li>
      <span>&nbsp;For sale:</span>
      {#await searchForSale(rocker.name)}
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

<script>
  export let derpling;
  export let traits;
  const ipfs = () => derpling.image.replace("ipfs://", "");
  // const ipfsParent = () => egg.parent.image.replace("ipfs://", "");
  const display = (trait, value) =>
    traits.attributes[trait].filter(({ value: val }) => val === value)[0].label;
</script>

<div>
  <h2>{derpling.name}</h2>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="derpling" />
  <ul>
    <li><span>&nbsp;Aura:</span> {display("aura", derpling.aura)}</li>
    <li><span>&nbsp;Beak:</span> {display("beak", derpling.beak)}</li>
    <li><span>&nbsp;Body:</span> {display("body", derpling.body)}</li>
    <li><span>&nbsp;Eyes:</span> {display("eyes", derpling.eyes)}</li>
    <li><span>&nbsp;Head:</span> {display("head", derpling.head)}</li>
    <li><span>&nbsp;Cargo:</span> {display("cargo", derpling.cargo)}</li>
    <li><span>&nbsp;Color:</span> {display("color", derpling.color)}</li>
    <li><span>&nbsp;Sex:</span> {display("gender", derpling.gender)}</li>
    <li>
      <span>&nbsp;Eggshell:</span>
      {display("eggshell", derpling.eggshell)}
    </li>
    <li>
      <span>&nbsp;Pedestal:</span>
      {display("pedestal", derpling.pedestal)}
    </li>
    <li>
      <span>&nbsp;Basecolor:</span>
      {display("basecolor", derpling.basecolor)}
    </li>
    <li>
      <span>&nbsp;DadbodTag:</span>
      {display("dadbodTag", derpling.dadbodTag)}
    </li>
    <li><span>&nbsp;Rank:</span> {derpling.rank}</li>
    <li><span>&nbsp;Rank:</span> {derpling.rarityScore.toFixed(2)}</li>
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

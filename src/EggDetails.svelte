<script>
  export let egg;
  const ipfs = () => egg.image.replace("ipfs://", "");
  const ipfsParent = () => egg.parent.image.replace("ipfs://", "");
</script>

<div>
  <h2>{egg.name}</h2>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="egg" />
  <ul>
    <li><span>&nbsp;Hatch date:</span> {egg.hatchDate}</li>
    <li><span>&nbsp;Perfect:</span> {egg.perfect ? egg.perfect : "No"}</li>
    <li><span>&nbsp;Symbol:</span> {egg.symbol}</li>
    <li><span>&nbsp;X Chromosome:</span> {egg.xChromo}</li>
    <li><span>&nbsp;Y Chromosome:</span> {egg.yChromo}</li>
  </ul>
  <img
    class="sm"
    src="https://ipfs.blockfrost.dev/ipfs/{ipfsParent()}"
    alt="derp"
  />
  <ul>
    <li>{egg.parent.name}</li>
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
  img.sm {
    height: 100px;
    width: 100px;
  }
  li {
    list-style-type: none;
  }
  ul {
    padding: 0px;
  }
  span {
    display: inline-block;
    width: 8em;
    font-weight: bold;
  }
</style>

<script>
  export let derpling;
  const ipfs = () => derpling.image.replace("ipfs://", "");
  // const ipfsParent = () => egg.parent.image.replace("ipfs://", "");
</script>

<div>
  <h2>{derpling.name}</h2>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="derpling" />
  <ul>
    <li><span>&nbsp;Aura:</span> {derpling.aura}</li>
    <li><span>&nbsp;Beak:</span> {derpling.beak}</li>
    <li><span>&nbsp;Body:</span> {derpling.body}</li>
    <li><span>&nbsp;Eyes:</span> {derpling.eyes}</li>
    <li><span>&nbsp;Head:</span> {derpling.head}</li>
    <li><span>&nbsp;Cargo:</span> {derpling.cargo}</li>
    <li><span>&nbsp;Color:</span> {derpling.color}</li>
    <li><span>&nbsp;Sex:</span> {derpling.gender}</li>
    <li><span>&nbsp;Eggshell:</span> {derpling.eggshell}</li>
    <li><span>&nbsp;Pedestal:</span> {derpling.pedestal}</li>
    <li><span>&nbsp;Basecolor:</span> {derpling.basecolor}</li>
    <li><span>&nbsp;DadbodTag:</span> {derpling.dadbodTag}</li>
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
    width: 8em;
    font-weight: bold;
  }
</style>

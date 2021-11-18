<script>
  export let derpling;
  const ipfs = () => derpling.image.replace("ipfs://", "");
</script>

<div>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="derpling" />
  <h3>{derpling.name}</h3>
</div>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>

<script>
  export let rocker;
  const ipfs = () => rocker.image.replace("ipfs://", "");
</script>

<div>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="Baby rocker" />
  <h3>{rocker.name}</h3>
</div>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>

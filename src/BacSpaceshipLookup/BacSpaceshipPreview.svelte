<script>
  export let spaceship;
  const ipfs = () => spaceship.image.replace("ipfs://", "");
</script>

<div>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="BAC Spaceship" />
  <h3>{spaceship.name}</h3>
</div>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>

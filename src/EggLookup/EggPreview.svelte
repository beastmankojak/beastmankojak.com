<script>
  export let egg;
  const ipfs = () => egg.image.replace("ipfs://", "");
  const ipfsParent = () => egg.parent.image.replace("ipfs://", "");
</script>

<div>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs()}" alt="egg" />
  <h3>{egg.name}</h3>
</div>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>

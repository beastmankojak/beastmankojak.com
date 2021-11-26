<script>
  import { formatDate } from "../utils";
  export let totals;
</script>

<div>
  <p>Total number of derplings: <span>{totals.totalCount}</span></p>
  <p>Last updated: <span>{formatDate(totals.lastUpdate)}</span></p>
</div>

<style>
  span {
    font-weight: bold;
  }
</style>

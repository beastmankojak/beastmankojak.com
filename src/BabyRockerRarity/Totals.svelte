<script>
  import { formatDate } from "../utils";
  export let totals;
</script>

<div>
  <p>Total number of baby rockers: <span>{totals.totalCount} / 3333</span></p>
  <p>Last updated: <span>{formatDate(totals.lastUpdate)}</span></p>
</div>

<style>
  span {
    font-weight: bold;
  }
</style>

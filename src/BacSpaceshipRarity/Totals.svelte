<script>
  import { formatDate } from "../utils";
  export let totals;
</script>

<div>
  <p>
    Total number of BAC Spaceships: <span>{totals.totalCount} / 10000</span>
  </p>
  <p>Last updated: <span>{formatDate(totals.lastUpdate)}</span></p>
</div>

<style>
  span {
    font-weight: bold;
  }
</style>

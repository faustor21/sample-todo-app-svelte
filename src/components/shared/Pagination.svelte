<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const handlePageChange = (page) => {
    dispatch('pageChange', page)
  }

  // Handle arrow navigation
  const handleArrowClick = (nextPage) => {
    if (nextPage > 0 && nextPage <= pages[pages.length - 1]) {
      handlePageChange(nextPage)
    }
  }

  export let pages = []
  export let currentPage
</script>

<style>
  ul {
    margin-top: 2rem;
    padding: 0;
    list-style: none;

    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 2rem;
    font-size: 2rem;
    cursor: pointer;
    width: 3rem;
    text-align: center;
  }

  .active {
    background-color: var(--color-primary);
  }
</style>

<ul>
  <li on:click={() => handleArrowClick(parseInt(currentPage, 10) - 1)}>
    &laquo;
  </li>
  {#each pages as page}
    <li
      class:active={currentPage === page}
      on:click={() => handlePageChange(page)}>
      {page}
    </li>
  {/each}
  <li on:click={() => handleArrowClick(parseInt(currentPage, 10) + 1)}>
    &raquo;
  </li>
</ul>

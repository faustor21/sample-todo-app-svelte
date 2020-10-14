<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const handleTab = (selectedTab) => {
    if (currentTab !== selectedTab) {
      currentTab = selectedTab
      dispatch('tabChange', selectedTab)
    }
  }

  export let availableTabs = []
  export let currentTab
</script>

<style>
  nav {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: white;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0 2rem;
    font-size: 2rem;
    cursor: pointer;
  }

  .active {
    color: var(--color-primary);
    border-bottom: 0.2rem solid var(--color-primary);
  }
</style>

<nav>
  <ul>
    {#each availableTabs as tab}
      <li class:active={currentTab === tab} on:click={() => handleTab(tab)}>
        {tab}
      </li>
    {/each}
  </ul>
</nav>

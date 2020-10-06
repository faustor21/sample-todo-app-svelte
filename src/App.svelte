<script>
  import Header from './components/Header.svelte'
  import Tabs from './components/Tabs.svelte'
  import AddTodoForm from './components/AddTodoForm.svelte'
  import TodoList from './components/TodoList.svelte'

  const availableTabs = ['Pending', 'Done']
  let currentTab = availableTabs[0]
  let filterByDone = false

  const handleTabChange = (e) => {
    currentTab = e.detail
    console.log(currentTab)
    if (currentTab === availableTabs[0]) filterByDone = false
    else if (currentTab === availableTabs[1]) filterByDone = true
  }
</script>

<style>
  main {
    max-width: 60rem;
    height: 60rem;
    margin: 8rem auto;
    background-color: var(--color-grey-light-1);
    box-shadow: var(--shadow-dark);
  }
</style>

<main>
  <Header />
  <Tabs {availableTabs} {currentTab} on:tabChange={handleTabChange} />
  {#if filterByDone === false}
    <AddTodoForm />
  {/if}
  <TodoList done={filterByDone} />
</main>

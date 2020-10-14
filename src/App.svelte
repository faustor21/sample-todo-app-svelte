<script>
  import { onDestroy, onMount } from 'svelte'

  import Header from './components/Header.svelte'
  import AddTodoForm from './components/AddTodoForm.svelte'
  import TodoList from './components/TodoList.svelte'
  import Tabs from './components/shared/Tabs.svelte'
  import Pagination from './components/shared/Pagination.svelte'
  import { todos } from './stores/todos'
  import { filter } from 'svelte-awesome/icons'

  const availableTabs = ['Pending', 'Done']
  let currentTab = availableTabs[0]
  let filterByDone = false

  const handleTabChange = (e) => {
    currentTab = e.detail

    if (currentTab === availableTabs[0]) filterByDone = false
    else if (currentTab === availableTabs[1]) filterByDone = true
    todos.update((currentTodos) => currentTodos)
  }

  const maxTodosPerPage = 8
  let todosToBeDisplayed = [] // Todos to be displayed in the current page
  let pages = []
  let numPages = 1
  let currentPage = 1

  let unsubcribe

  const handlePageChange = (e) => {
    currentPage = e.detail
    todos.update((currentTodos) => currentTodos)
  }

  onMount(() => {
    unsubcribe = todos.subscribe((currentTodos) => {
      // Avoid devision by zero
      if (currentTodos.length > 0) {
        numPages = Math.ceil(currentTodos.length / maxTodosPerPage)
        if (numPages > 0) pages = []
        for (let n = 1; n <= numPages; n++) {
          pages = [...pages, n]
        }
      } else {
        numPages = 1
        currentPage = 1
      }

      // index starts at zero like in a regular array
      todosToBeDisplayed = currentTodos.reduce((acc, cv, index) => {
        if (cv.done === filterByDone) {
          if (currentPage === 1) {
            if (acc.length < maxTodosPerPage) return [...acc, cv]
          }
          if (currentPage > 1) {
            let upperLimit = currentPage * maxTodosPerPage - 1
            let lowerLimit = upperLimit - maxTodosPerPage + 1
            if (index >= lowerLimit && index <= upperLimit) {
              return [...acc, cv]
            }
          }
        }
        return acc
      }, [])
    })
  })

  onDestroy(unsubcribe)
</script>

<style>
  main {
    max-width: 60rem;
    height: 65rem;
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
  <TodoList todos={todosToBeDisplayed} done={filterByDone} />
  {#if numPages > 0}
    <Pagination {currentPage} {pages} on:pageChange={handlePageChange} />
  {/if}
</main>

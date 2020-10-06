<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { trash, check } from 'svelte-awesome/icons'

  import { todos } from '../stores/todos.js'

  import Button from './shared/Button.svelte'

  const removeTodo = (id) => {
    console.log(`Remove todo with id:${id}`)
    todos.update((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  // $: console.log(`todo.done = ${todo.done} for todo.id = ${todo.id}`)

  export let todo
</script>

<style>
  .list-item {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 0.5rem;
  }

  .title {
    width: 80%;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    width: 100%;
    font-size: 2rem;
    font-weight: 200;
    margin-left: 1.5rem;
  }

  .toggle-done {
    padding-left: 1rem;
    background-color: white;

    display: flex;
    align-content: center;
    align-items: center;
  }
</style>

<div class="list-item">
  <span class="toggle-done">
    <input
      type="checkbox"
      bind:checked={todo.done}
      on:change={() => todos.update((currentTodos) => currentTodos)} />
  </span>
  <div class="title">
    <h3>{todo.title}</h3>
  </div>
  <Button type="secondary" on:click={() => removeTodo(todo.id)}>
    <Icon data={trash} />
  </Button>
</div>

<script>
  import { todos } from '../stores/todos.js'

  import TodoListItem from './TodoListItem.svelte'

  export let done = false
</script>

<style>
  .todo-list {
    width: 100%;
    margin-top: 2rem;
  }
</style>

<div class="todo-list">
  {#each $todos as todo (todo.id)}
    {#if todo.done === done}
      <TodoListItem {todo} />
    {/if}
  {/each}
</div>

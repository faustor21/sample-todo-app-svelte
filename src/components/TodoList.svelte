<script>
  import TodoListItem from './TodoListItem.svelte'

  export let todos = []
</script>

<style>
  .todo-list {
    width: 100%;
    margin-top: 2rem;
  }
</style>

<div class="todo-list">
  {#each todos as todo (todo.id)}
    <TodoListItem {todo} />
  {/each}
</div>

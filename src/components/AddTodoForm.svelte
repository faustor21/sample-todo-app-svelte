<script>
  import { todos } from '../stores/todos.js'

  import Button from './shared/Button.svelte'

  let title = ''

  const handleSubmit = () => {
    if (title.trim().length > 1) {
      const todo = { id: Date.now(), title, done: false }
      todos.update((currentTodos) => {
        return [todo, ...currentTodos]
      })
      title = ''
      console.log('Form has being submitted with value: ', todo)
    }
  }
</script>

<style>
  form {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  input {
    border: none;
    padding: 0.8rem 1.2rem;
    width: 81.5%;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="Add todo" bind:value={title} />
  <Button>Add</Button>
</form>

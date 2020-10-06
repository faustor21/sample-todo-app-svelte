<script>
  export let type = 'primary'
</script>

<style>
  button {
    border: none;
    cursor: pointer;
    padding: 0.8rem 1.2rem;
  }

  /* button:hover {
    background-color: var(--color-primary);
  } */

  .primary {
    background-color: var(--color-primary);
    color: white;
  }

  .primary:active {
    background-color: var(--color-grey-dark-2);
  }

  .secondary {
    background-color: var(--color-grey-dark-1);
    color: white;
  }

  .secondary:active {
    background-color: var(--color-grey-light-3);
  }
</style>

<button on:click on:submit class={type}>
  <slot />
</button>

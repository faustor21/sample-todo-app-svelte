import { writable } from 'svelte/store'

export const todos = writable([
  {
    id: Date.now(),
    title: 'Sample todo',
    done: false,
  },
])

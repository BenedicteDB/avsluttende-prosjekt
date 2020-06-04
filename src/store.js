import { writable } from 'svelte/store'

export let loggedin = writable(false)
export let reviews = writable([])
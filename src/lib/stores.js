import { writable } from 'svelte/store';

export const user = writable({ profilePic: '/default-profile.png' }); // Initialize the user store with a default profile picture

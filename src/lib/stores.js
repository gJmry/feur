import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialValue = browser ? localStorage.getItem('minigameCar') === 'true' : false;

export const minigameCar = writable(initialValue);

if (browser) {
    minigameCar.subscribe(value => {
        localStorage.setItem('minigameCar', value);
    });
}

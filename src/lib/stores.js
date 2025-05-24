import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const minigameCar = writable(false);
export const minigameAppartemment = writable(false);
export const minigameRoof = writable(false);

if (browser) {
    minigameCar.subscribe(value => {
        localStorage.setItem('minigameCar', value);
    });

    minigameAppartemment.subscribe(value => {
        localStorage.setItem('minigameAppartemment', value);
    })

    minigameRoof.subscribe(value => {
        localStorage.setItem('minigameRoof', value);
    })
}

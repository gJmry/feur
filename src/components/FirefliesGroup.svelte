<script>
    import Firefly from './Firefly.svelte';
    export let count = 12;
    export let minSize = 7;
    export let maxSize = 14;
    export let minSpeed = 40;
    export let maxSpeed = 200;
    export let released = false; // Ajouté

    let seeds = Array.from({ length: count }, () => ({
        size: minSize + Math.random() * (maxSize - minSize),
        colorSeed: Math.random() * 1000,
        minSpeed,
        maxSpeed
    }));
</script>

<style>
    .fireflies-container {
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 20;
    }
</style>

<div class="fireflies-container">
    {#each seeds as s}
        <Firefly size={s.size} colorSeed={s.colorSeed} minSpeed={s.minSpeed} maxSpeed={s.maxSpeed} released={released} />
    {/each}
</div>

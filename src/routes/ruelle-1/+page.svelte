<svelte:head>
    <link rel="preload" as="image" href="/ruelle-1/voituree-et-ruelle-light.png">
    <link rel="preload" as="image" href="/ruelle-1/voiture-et-ruelle-dark.png">
</svelte:head>

<script>
    import LampeTorche from "../../components/LampeTorche.svelte";
    import CarMinigame from "../../components/ruelle-1/CarMinigame.svelte";
    import {minigameCar} from '$lib/stores.js';

    $: isCarMinigameActive = $minigameCar;

    let modalOpen = false;

    function carFixed() {
        closeModal();
        minigameCar.set(true);
    }

    function openModal() {
        if (!isCarMinigameActive) {
            modalOpen = true;
        }
    }

    function closeModal() {
        modalOpen = false;
    }
</script>

<div
        class="relative min-h-screen bg-cover bg-center"
        style="background-image: url({isCarMinigameActive
        ? 'ruelle-1/voituree-et-ruelle-light.png'
        : 'ruelle-1/voiture-et-ruelle-dark.png'});"
>
    {#if modalOpen}
        <div class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <CarMinigame on:solved={carFixed} on:close={closeModal}/>
        </div>
    {/if}

    <button
            aria-label="Cliquer sur la voiture"
            on:click={openModal}
            class="absolute cursor-pointer"
            style="bottom: 0%; right: 30%; width: 600px; height: 300px; opacity: 0; cursor: pointer"
    >
    </button>
</div>

{#if !isCarMinigameActive}
    <LampeTorche/>
{/if}


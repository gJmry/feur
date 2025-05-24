<script>
    import LampeTorche from "../../components/LampeTorche.svelte";
    import {minigameAppartemment} from '$lib/stores.js';
    import EnigmeFils from "../../components/EnigmeFils.svelte";
    import FirefliesGroup from '../../components/FirefliesGroup.svelte';
    $: isMinigamentApppartemmentActive = $minigameAppartemment;
    let modalOpen = false;

    function cableFixed() {
        closeModal();
        minigameAppartemment.set(true);
    }

    function openModal() {
        if (!isMinigamentApppartemmentActive) {
            modalOpen = true;
        }
    }

    function closeModal() {
        modalOpen = false;
    }
</script>

<div class="relative min-h-screen bg-cover bg-center"
     style="background-image: url({isMinigamentApppartemmentActive
        ? 'appartemment/appart-light.webp'
        : 'appartemment/appart-dark.webp'});">

    <button
            aria-label="Cliquer sur l'ordinateur"
            on:click={openModal}
            class="absolute cursor-pointer"
            style="bottom: 50%; right: 15%; width: 600px; height: 300px; opacity: 0; cursor: pointer; z-index: 50;"
    >
    </button>
    <div style="position: absolute; bottom: 50%; right: 15%; width: 600px; height: 300px; pointer-events: none; z-index: 100;">
        <FirefliesGroup count={4} minSize={10} maxSize={16} minSpeed={60} maxSpeed={120} />
    </div>

    {#if modalOpen}
        <div class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <EnigmeFils on:win={cableFixed}/>
        </div>
    {/if}

    <a href="/toit"
       class="absolute top-0 left-0 h-full w-[15%] bg-transparent hover:bg-white/10 transition"
       title="Aller vers le toit">
        <div class="absolute top-1/2 -translate-y-1/2 right-2 text-white text-[15rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-move-left-icon lucide-move-left">
                <path d="M6 8L2 12L6 16"/>
                <path d="M2 12H22"/>
            </svg>
        </div>
    </a>

    <a href="/accueil"
       class="absolute top-0 right-0 h-full w-[15%] bg-transparent hover:bg-white/10 transition"
       title="Aller vers l'accueil">
        <div class="absolute top-1/2 -translate-y-1/2 left-2 text-white text-[15rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-move-right-icon lucide-move-right">
                <path d="M18 8L22 12L18 16"/>
                <path d="M2 12H22"/>
            </svg>
        </div>
    </a>
</div>
{#if !isMinigamentApppartemmentActive}
    <LampeTorche/>
{/if}


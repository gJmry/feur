<script>
    import LampeTorche from "../../components/LampeTorche.svelte";
    import {minigameFirefly} from '$lib/stores.js';
    import EnigmeFirefly from "../../components/EnigmeFirefly.svelte";
    import FirefliesGroup from "../../components/FirefliesGroup.svelte";

    $: isMinigamentFireflyActive = $minigameFirefly;

    let modalOpen = false;
    let firefliesReleased = false;

    function codeFixed() {
        closeModal();
        minigameFirefly.set(true);
    }

    function handleRelease() {
        firefliesReleased = true;
        minigameFirefly.set(true);
        closeModal();
    }

    function openModal() {
        if (!isMinigamentFireflyActive) {
            modalOpen = true;
        }
    }

    function closeModal() {
        modalOpen = false;
    }
</script>
{#if !isMinigamentFireflyActive}
    <LampeTorche/>
{/if}
<div class="relative min-h-screen bg-cover bg-center"
     style="background-image: url({isMinigamentFireflyActive
        ? 'port/Porc.webp'
        : 'port/Porc.webp'});">

    <button
            aria-label="Cliquer sur l'ordinateur"
            on:click={!firefliesReleased ? openModal : undefined}
            class="absolute cursor-pointer"
            style="bottom: 24%; right: 76%; width: 100px; height: 150px; opacity: 1; cursor: pointer;"
            disabled={firefliesReleased}
    >
        <div style="position: relative; width: 100px; height: 150px;">
            {#if !firefliesReleased}
                <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; z-index: 0; padding: 8px;">
                    <FirefliesGroup count={10} minSize={7} maxSize={14} minSpeed={40} maxSpeed={200} />
                </div>
                <img src="/port/connaissezvousleroller.webp" alt="bouteille de lucioles" style="width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 1; pointer-events: none;"/>
            {:else}
                <img src="/port/maisouicestclair.webp" alt="bouteille ouverte" style="width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 1; pointer-events: none;"/>
            {/if}
        </div>
    </button>


    {#if modalOpen}
        <div class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <EnigmeFirefly on:release={handleRelease} on:win={codeFixed} on:close={closeModal}/>
        </div>
    {/if}

    {#if firefliesReleased}
        <FirefliesGroup count={18} minSize={10} maxSize={18} minSpeed={60} maxSpeed={180} style="position: absolute; width: 100vw; height: 100vh;"/>
    {/if}

    <a href="/ruelle"
       class="absolute top-0 left-0 h-full w-[15%] bg-transparent hover:bg-white/10 transition"
       title="Aller vers la ruelle">
        <div class="absolute top-1/2 -translate-y-1/2 right-2 text-white text-[15rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-move-left-icon lucide-move-left">
                <path d="M6 8L2 12L6 16"/>
                <path d="M2 12H22"/>
            </svg>
        </div>
    </a>
</div>

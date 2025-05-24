<script>
    import LampeTorche from "../../components/LampeTorche.svelte";
    import {minigameFirefly} from '$lib/stores.js';
    import EnigmeFirefly from "../../components/EnigmeFirefly.svelte";

    $: isMinigamentFireflyActive = $minigameFirefly;

    let modalOpen = false;

    function codeFixed() {
        closeModal();
        minigameFirefly.set(true);
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

<div class="relative min-h-screen bg-cover bg-center"
     style="background-image: url({isMinigamentFireflyActive
        ? 'port/Porc.webp'
        : 'port/Porc.webp'});">

    <button
            aria-label="Cliquer sur l'ordinateur"
            on:click={openModal}
            class="absolute cursor-pointer"
            style="bottom: 5%; right: 5%; width: 600px; height: 300px; opacity: 0; cursor: pointer"
    >
    </button>

    {#if modalOpen}
        <div class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <EnigmeFirefly on:win={codeFixed} on:close={closeModal}/>
        </div>
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
{#if !isMinigamentFireflyActive}
    <LampeTorche/>
{/if}
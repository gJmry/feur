<script>
    import LampeTorche from "../../components/LampeTorche.svelte";
    import CarMinigame from "../../components/ruelle-1/CarMinigame.svelte";

    let modalOpen = false;

    function openModal() {
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }
</script>

<div
        class="relative min-h-screen bg-cover bg-center"
        style="background-image: url('https://www.vizitoo.com/wp-content/uploads/sites/7/2020/06/fantomes-lyon.jpg');"
>
    <button
            aria-label="Cliquer sur la voiture"
            on:click={openModal}
            class="absolute cursor-pointer"
            style="bottom: 5%; right: 35%; width: 200px; height: 200px; opacity: 0; cursor: pointer"
    >
    </button>
</div>
{#if !modalOpen}
    <LampeTorche />
{/if}

{#if modalOpen}
    <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 absolute">
        <CarMinigame />
    </div>
{/if}


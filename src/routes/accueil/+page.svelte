<svelte:head>
    <link rel="preload" as="image" href="index/k.webp">
    <link rel="preload" as="image" href="ruelle/voituree-et-ruelle-light.png">
    <link rel="preload" as="image" href="ruelle/voiture-et-ruelle-dark.png">
    <link rel="preload" as="image" href="ruelle/voiture-et-ruelle-dark.png">
    <link rel="preload" as="image" href="appartemment/appart-dark.webp">
    <link rel="preload" as="image" href="appartemment/appart-light.webp">
    <link rel="reload" as="image" href="EnigmeFils/boitier.png">
    <link rel="reload" as="image" href="port/connaissezvousleroller.webp">
    <link rel="reload" as="image" href="port/maisouicestclair.webp">
    <link rel="reload" as="image" href="port/Porc.webp">
    <link rel="reload" as="image" href="roof/background.png">
</svelte:head>
<script>
    import Lantern from "../../components/Lantern.svelte";
    import LampeTorche from "../../components/LampeTorche.svelte";
    import {onDestroy} from "svelte";
    import {minigameRoof, minigameAppartemment, minigameCar, minigameFirefly} from '$lib/stores.js';
    import Firework from "../../components/Firework.svelte";

    let values = {
        minigameCar: false,
        minigameAppartemment: false,
        minigameRoof: false,
        minigameFirefly: false,
    };


    const unsubCar = minigameCar.subscribe(v => values.minigameCar = v);
    const unsubAppart = minigameAppartemment.subscribe(v => values.minigameAppartemment = v);
    const unsubRoof = minigameRoof.subscribe(v => values.minigameRoof = v);
    const unsubFirefly = minigameFirefly.subscribe(v => values.minigameFirefly = v);

    onDestroy(() => {
        unsubCar();
        unsubAppart();
        unsubRoof();
        unsubFirefly();
    });

    function randomPosition() {
        return `top: ${Math.random() * 85 + 5}%; left: ${Math.random() * 85 + 5}%;`;
    }

    $: lanterns = Object.entries(values)
        .filter(([_, val]) => val === true)
        .map(([key], i) => ({id: key, style: randomPosition()}));

    $: allComplete = Object.values(values).every(v => v === true);
</script>


{#if !allComplete}
    <LampeTorche/>
{/if}

{#if allComplete}
    <Firework/>
{/if}

<div class="relative min-h-screen bg-cover bg-center flex justify-center items-center"
     style="background-image: url('/index/k.webp')">

    {#each lanterns as lantern (lantern.id)}
        <Lantern style={lantern.style}/>
    {/each}

    {#if allComplete}
        <h1 class="text-white text-3xl"> Vous avez réussi à rallumer les lumières, bien joué !</h1>
    {/if}
    <a href="/appartemment"
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

    <a href="/ruelle"
       class="absolute top-0 right-0 h-full w-[15%] bg-transparent hover:bg-white/10 transition"
       title="Aller vers la ruelle">
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

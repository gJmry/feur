<script>
    import { createEventDispatcher } from "svelte";
    import FirefliesGroup from './FirefliesGroup.svelte';
    const dispatch = createEventDispatcher();

    let isOpen = false;
    let win = false;

    function toggleBocal() {
        if (isOpen) {
            dispatch("win");
            isOpen = false;
        } else {
            isOpen = true;
            dispatch("release"); // Ajout : signale la libération des lucioles
        }
    }

    function onKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleBocal();
        }
    }
</script>

<style>
    .bocal {
        width: 200px;
        height: 300px;
        background-image: url("port/connaissezvousleroller.webp");
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        position: relative;
        outline: none;
    }
    .bocal.open {
        background-image: url("port/maisouicestclair.webp");
    }
    .mini-game {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        background: white;
        border-radius: 12px;
        box-shadow: 0 0 10px #0003;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    button.solve {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
</style>

<div
        class="bocal {isOpen ? 'open' : ''}"
        on:click={toggleBocal}
        on:keydown={onKeyDown}
        aria-label="Bocal"
        role="button"
        tabindex="0"
>
    <FirefliesGroup
        count={8}
        minSize={10}
        maxSize={16}
        minSpeed={60}
        maxSpeed={120}
        released={isOpen}
        style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:2;"
    />
</div>

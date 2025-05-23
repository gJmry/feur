<script>
    import { createEventDispatcher } from "svelte";
    import LampeTorche from "../LampeTorche.svelte";
    const dispatch = createEventDispatcher();

    const colorMap = {
        rouge: ['vert'],
        bleu: ['vert', 'rouge'],
        vert: ['vert']
    };

    const instructions = [
        { action: 'tourner', color: 'rouge', count: 3 },
        { action: 'appuyer', color: 'bleu', count: 2 },
        { action: 'tourner', color: 'vert', count: 1 }
    ];

    let counts = {
        rouge: 0,
        vert: 0,
        bleu: 0
    };

    let success = false;
    let errorMessage = "";

    function resetCounts() {
        counts = { rouge: 0, vert: 0, bleu: 0 };
    }

    function handleSuccess(){
        if (checkSuccess()) {
            success = true;
            errorMessage = "";
            setTimeout(() => dispatch("solved"), 1000);
        } else {
            success = false;
            errorMessage = "La voiture n'a pas l'air de démarré...";
            resetCounts();
        }
    }

    function handleClick(color) {
        counts[color]++;
        errorMessage = "";
    }

    function checkSuccess() {
        const expected = { rouge: 0, vert: 0, bleu: 0 };
        for (const instr of instructions) {
            expected[instr.color] += instr.count;
        }
        return expected.rouge === counts.rouge &&
            expected.vert === counts.vert &&
            expected.bleu === counts.bleu;
    }

</script>

<div class="container">
    <LampeTorche />
    <button
            on:click={() => dispatch("close")}
            class="close-btn"
            aria-label="Fermer"
    >&times;</button>

    <div class="content">
        <div class="image-wrapper">
            <img src="ruelle-1/notice.png" alt="Notice de voiture" />
        </div>

        <div class="buttons-wrapper">
            <div class="buttons">
                <div class="button rouge" on:click={() => handleClick('rouge')}>
                    Rouge<br />{counts.rouge}
                </div>
                <div class="button vert" on:click={() => handleClick('vert')}>
                    Vert<br />{counts.vert}
                </div>
                <div class="button bleu" on:click={() => handleClick('bleu')}>
                    Bleu<br />{counts.bleu}
                </div>
            </div>

            <button
                    class="button validate"
                    aria-label="Valider"
                    on:click={handleSuccess}
                    title="Valider"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </button>

            {#if success}
                <div class="success-msg">🚗 La voiture démarre !</div>
            {/if}

            {#if errorMessage}
                <div class="error-msg">{errorMessage}</div>
            {/if}
        </div>
    </div>
</div>


<style>
    .container {
        z-index: 15;
        max-width: 900px;
        margin: 2rem auto;
        padding: 2rem;
        background-color: #2d3748;
        border-radius: 1rem;
        color: white;
        position: relative;
        box-shadow: 0 0 15px rgba(0,0,0,0.7);
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        font-size: 2.5rem;
        color: white;
        cursor: pointer;
        transition: color 0.3s;
    }
    .close-btn:hover {
        color: #e53e3e;
    }

    .content {
        display: flex;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .image-wrapper img {
        max-width: 320px;
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 6px 15px rgba(0,0,0,0.5);
        user-select: none;
    }

    .buttons-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        min-width: 250px;
    }

    .buttons {
        display: flex;
        gap: 1.5rem;
    }

    .button {
        width: 110px;
        height: 110px;
        border-radius: 9999px;
        font-weight: 700;
        font-size: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
        transition: transform 0.2s;
        color: white;
        text-align: center;
        line-height: 1.3;
        box-shadow: 0 6px 12px rgba(0,0,0,0.3);
    }
    .button:hover {
        transform: scale(1.1);
        box-shadow: 0 9px 18px rgba(0,0,0,0.5);
    }

    .error-msg {
        margin-top: 1rem;
        color: #f56565;
        font-weight: 700;
        font-size: 1.3rem;
        text-align: center;
        user-select: none;
    }

    .rouge { background: #e53e3e; }
    .vert { background: #38a169; }
    .bleu { background: #3182ce; }

    .validate {
        width: 60px;
        height: 60px;
        border-radius: 1rem;
        background: #718096;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.4);
        transition: background-color 0.3s, transform 0.2s;
    }
    .validate:hover {
        background: #4a5568;
        transform: scale(1.15);
    }

    .icon {
        width: 28px;
        height: 28px;
        stroke: white;
    }

    .success-msg {
        margin-top: 1rem;
        color: #48bb78;
        font-weight: 800;
        font-size: 1.5rem;
        text-align: center;
        user-select: none;
    }

    @media (max-width: 640px) {
        .content {
            flex-direction: column;
            gap: 2rem;
        }
        .buttons {
            gap: 1rem;
        }
    }
</style>

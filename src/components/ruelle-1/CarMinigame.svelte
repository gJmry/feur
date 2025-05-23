<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const colorMap = {
        rouge: ['vert'],
        bleu: ['vert', 'rouge'],
        vert: ['vert']
    };

    const instructions = [
        { action: 'tourner', color: 'rouge', count: 2 },
        { action: 'appuyer', color: 'bleu', count: 3 },
        { action: 'tourner', color: 'vert', count: 1 }
    ];

    let counts = {
        rouge: 0,
        vert: 0,
        bleu: 0
    };

    let success = false;

    function handleClick(color) {
        counts[color]++;
        if (checkSuccess()) {
            success = true;
            setTimeout(() => dispatch("solved"), 1500);
        }
    }

    function checkSuccess() {
        const expected = { rouge: 0, vert: 0, bleu: 0 };
        for (const instr of instructions) {
            colorMap[instr.color].forEach(c => {
                expected[c] += instr.count;
            });
        }
        return expected.rouge === counts.rouge &&
            expected.vert === counts.vert &&
            expected.bleu === counts.bleu;
    }
</script>
<div class="w-full min-h-screen max-w-3xl mx-auto px-6 py-8 bg-gray-800 rounded-xl shadow-lg text-white flex flex-col justify-center gap-6 items-center">
    <button
            on:click={() => dispatch("solved")}
            class="top-4 right-4 text-white text-2xl font-bold hover:text-red-400"
            aria-label="Fermer"
    >&times;</button>



        <div class="flex gap-4 mb-6">
            <div class="button rouge" on:click={() => handleClick('rouge')}>Rouge<br />{counts.rouge}</div>
            <div class="button vert" on:click={() => handleClick('vert')}>Vert<br />{counts.vert}</div>
            <div class="button bleu" on:click={() => handleClick('bleu')}>Bleu<br />{counts.bleu}</div>
        </div>

    <button
            class="button validate"
            aria-label="Valider"
            on:click={checkSuccess()}
            title="Valider"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </button>

        {#if success}
            <div class="text-green-400 font-bold text-center mt-4">🚗 La voiture démarre !</div>
        {/if}
</div>

<style>
    .button {
        width: 80px;
        height: 80px;
        border-radius: 9999px;
        font-weight: bold;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
        transition: transform 0.2s;
        color: white;
        text-align: center;
        line-height: 1.2;
    }

    .button:hover {
        transform: scale(1.1);
    }

    .rouge { background: #e53e3e; }
    .vert { background: #38a169; }
    .bleu { background: #3182ce; }
</style>

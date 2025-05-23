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
            setTimeout(() => {
                dispatch("solved");
            }, 1500);
        }
    }

    function checkSuccess() {
        const expected = {
            rouge: 0,
            vert: 0,
            bleu: 0
        };
        for (const instr of instructions) {
            const mapped = colorMap[instr.color];
            mapped.forEach(c => {
                expected[c] += instr.count;
            });
        }
        return expected.rouge === counts.rouge &&
            expected.vert === counts.vert &&
            expected.bleu === counts.bleu;
    }
</script>

<style>
    .modal {
        background-color: #1a202c;
        color: white;
        border-radius: 1rem;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 0 30px rgba(0,0,0,0.7);
        position: relative;
    }

    .button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-weight: bold;
        color: white;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        transition: transform 0.2s ease;
    }

    .button:hover {
        transform: scale(1.1);
    }

    .rouge { background: #e53e3e; }
    .vert { background: #38a169; }
    .bleu { background: #3182ce; }

    .legend span {
        padding: 0 4px;
    }
</style>

<div class="modal">
    <h2 class="text-2xl mb-4 text-center font-semibold">Démarrer la voiture</h2>
    <p class="mb-4 text-sm text-center">
        Suivez les instructions ci-dessous pour réussir à démarrer la voiture.<br />
        Attention, les couleurs ont été mélangées... 🧠
    </p>

    <ul class="mb-6 text-sm list-disc pl-5 space-y-1">
        {#each instructions as instr}
            <li>{instr.action} {instr.count} fois le bouton <span class={instr.color}>{instr.color}</span></li>
        {/each}
    </ul>

    <div class="flex justify-around mb-6">
        <div class="button rouge" on:click={() => handleClick('rouge')}>Rouge<br />{counts.rouge}</div>
        <div class="button vert" on:click={() => handleClick('vert')}>Vert<br />{counts.vert}</div>
        <div class="button bleu" on:click={() => handleClick('bleu')}>Bleu<br />{counts.bleu}</div>
    </div>

    <div class="legend text-sm text-gray-300 text-center">
        <p><span class="rouge">Rouge</span> = <span class="vert">Vert</span></p>
        <p><span class="bleu">Bleu</span> = <span class="vert">Vert</span> + <span class="rouge">Rouge</span></p>
        <p><span class="vert">Vert</span> = <span class="vert">Vert</span></p>
    </div>

    {#if success}
        <div class="mt-6 text-green-400 text-center font-bold">🚗 La voiture démarre !</div>
    {/if}
</div>

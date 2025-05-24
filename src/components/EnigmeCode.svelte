<script>
    import { createEventDispatcher } from 'svelte';

    export let code = '6703'; // code valide
    let codeInput = ['0', '0', '0', '0'];

    let win = false;
    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch('close');
    }

    $: if (win) {
        dispatch('win');
    }

    // Couleurs dans l’ordre demandé
    const bgColors = ['#FFEB3B', '#E91E63', '#B0B0B0', '#38A169'];
</script>

<div class="background-blur flex flex-col items-center justify-center">
    <button on:click={handleClose} class="close-btn" aria-label="Fermer le modal">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x">
            <circle cx="12" cy="12" r="10"/>
            <path d="m15 9-6 6"/>
            <path d="m9 9 6 6"/>
        </svg>
    </button>

    <div class="grey-box">
        {#each Array(4) as _, i}
            <input
                    class="code-input"
                    type="text"
                    maxlength="1"
                    pattern="[0-9]"
                    inputmode="numeric"
                    bind:value={codeInput[i]}
                    style="background-color: {bgColors[i]}"
                    on:input={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    codeInput[i] = val ? val : '0';
                    e.target.value = codeInput[i];
                    if (codeInput.join('') === code) {
                        win = true;
                    }
                }}
            />
        {/each}
    </div>
</div>

<style>
    .background-blur {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(8px);
        background: rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .close-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        color: white;
        margin-bottom: 2rem;
        transition: color 0.2s;
    }

    .close-btn:hover {
        color: #e53e3e;
    }

    .grey-box {
        background: #ccc;
        border-radius: 16px;
        padding: 2rem;
        min-width: 300px;
        min-height: 200px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .code-input {
        width: 3.5rem;
        height: 5.5rem;
        font-size: 2rem;
        text-align: center;
        margin: 0 0.5rem;
        border-radius: 8px;
        border: 1px solid #aaa;
        color: black;
        font-weight: 700;
    }
</style>

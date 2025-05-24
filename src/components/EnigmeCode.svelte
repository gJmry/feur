<script>
    export let code;
    let codeInput = ['0', '0', '0', '0'];

    let win = false
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    $: if (win) {
        dispatch('win');
    }
</script>

<div class="background-blur">
    <div class="grey-box">
        {#each Array(4) as _, i}
            <input
                class="code-input"
                type="text"
                maxlength="1"
                pattern="[0-9]"
                inputmode="numeric"
                bind:value={codeInput[i]}
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
    align-items: center;
    justify-content: center;
    z-index: 1000;
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
    background: #fff;
}
</style>
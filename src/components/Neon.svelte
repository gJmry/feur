<script>

    // Inspired by https://codepen.io/acupoftee/pen/RwNXxyq

    export let text="";

    let charArray =[];
    let partial="";
    for (let step = 0; step < text.length; step++) {
        if (Math.random() >0.7) {
            partial = partial + text[step]
        }else{
            charArray.push({partial:partial,flicker:(Math.random() >0.7)?true:false})
            partial = text[step]
        }
    }
    charArray.push({partial:partial,flicker:(Math.random() >0.7)?true:false})

</script>

<div class="sign">
    {#each charArray as char}
        {#if char.flicker}
            <span class="{(Math.random() >0.5)?'flicker':'fast-flicker'}">{char.partial}</span>
        {:else}
            {char.partial}
        {/if}
    {/each}
</div>

<style>
    @import url(https://fonts.bunny.net/css?family=audiowide:400);

    .sign {
        position: relative;
        background-image: radial-gradient(
                ellipse 50% 50% at 25% 50%,
                #6b1839,
                transparent
        );
        letter-spacing: 2;
        font-family: 'Audiowide', display;
        text-transform: uppercase;
        font-size: 3em;
        color: #ffe6ff;
        text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
        animation: shine 2s forwards, flicker 3s infinite;
    }

    @keyframes blink {
        0%,
        22%,
        36%,
        75% {
            color: #ffe6ff;
            text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
            -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
            0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
        }
        28%,
        33% {
            color: #ff65bd;
            text-shadow: none;
        }
        82%,
        97% {
            color: #ff2483;
            text-shadow: none;
        }
    }

    .flicker {
        animation: shine 2s forwards, blink 3s 2s infinite;
    }

    .fast-flicker {
        animation: shine 2s forwards, blink 10s 1s infinite;
    }

    @keyframes shine {
        0% {
            color: #6b1839;
            text-shadow: none;
        }
        100% {
            color: #ffe6ff;
            text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
            -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
            0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
        }
    }

    @keyframes flicker {
        from {
            opacity: 1;
        }

        4% {
            opacity: 0.9;
        }

        6% {
            opacity: 0.85;
        }

        8% {
            opacity: 0.95;
        }

        10% {
            opacity: 0.9;
        }

        11% {
            opacity: 0.922;
        }

        12% {
            opacity: 0.9;
        }

        14% {
            opacity: 0.95;
        }

        16% {
            opacity: 0.98;
        }

        17% {
            opacity: 0.9;
        }

        19% {
            opacity: 0.93;
        }

        20% {
            opacity: 0.99;
        }

        24% {
            opacity: 1;
        }

        26% {
            opacity: 0.94;
        }

        28% {
            opacity: 0.98;
        }

        37% {
            opacity: 0.93;
        }

        38% {
            opacity: 0.5;
        }

        39% {
            opacity: 0.96;
        }

        42% {
            opacity: 1;
        }

        44% {
            opacity: 0.97;
        }

        46% {
            opacity: 0.94;
        }

        56% {
            opacity: 0.9;
        }

        58% {
            opacity: 0.9;
        }

        60% {
            opacity: 0.99;
        }

        68% {
            opacity: 1;
        }

        70% {
            opacity: 0.9;
        }

        72% {
            opacity: 0.95;
        }

        93% {
            opacity: 0.93;
        }

        95% {
            opacity: 0.95;
        }

        97% {
            opacity: 0.93;
        }

        to {
            opacity: 1;
        }
    }

</style>

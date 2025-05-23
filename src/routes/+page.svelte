<script>
    import { goto } from '$app/navigation';

    let flipped = false;
    let stage = 0;

    function handleSwitchClick() {
        if (stage > 0) return;

        flipped = true;

        setTimeout(() => {
            stage = 1;
        }, 300);

        setTimeout(() => {
            stage = 2;
            goto('/accueil');
        }, 1000);
    }
</script>

<style>
    .background-accueil {
        background-image: url('https://www.lyoncapitale.fr/wp-content/uploads/2018/11/Fontaine-des-Jacobins-Lyon-la-nuit-30-ans-plan-lumie%CC%80res-2018-%C2%A9-Tim-Douet_0127-770x433.jpeg');
        background-size: cover;
        background-position: center;
    }

    @keyframes flicker {
        0%, 100% {
            opacity: 1;
        }
        20% {
            opacity: 0.3;
        }
        40% {
            opacity: 0.7;
        }
        60% {
            opacity: 0.2;
        }
        80% {
            opacity: 0.9;
        }
    }

    .flicker {
        animation: flicker 0.5s linear forwards;
    }
</style>

<div class="relative min-h-screen w-full background-accueil overflow-hidden">
    <div
            class="absolute inset-0 bg-black transition-opacity duration-[1000ms]"
            class:flicker={stage === 1}
            style="opacity: {stage === 2 ? 0 : 1}"
    ></div>

    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center space-y-8 px-4">
        <h1 class="text-2xl font-light tracking-wider">LIGHTS EM OUT PLACEHOLDER</h1>
        <button
                on:click={handleSwitchClick}
                type="button"
                title="Activer l’interrupteur"
                class="p-0 border-none bg-transparent"
        >
            <img
                    src="/index/lightswitch.png"
                    alt="Interrupteur"
                    class="block cursor-pointer transition-transform duration-300"
                    class:scale-y-[-1]={flipped}
            />
        </button>
    </div>
</div>

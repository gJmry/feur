<script>
    import { goto } from '$app/navigation';
    import LampeTorche from "../components/LampeTorche.svelte";

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
        background-image: url('/index/home.webp');
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
            class="absolute inset-0 bg-gray-900 transition-opacity duration-[1000ms]"
            class:flicker={stage === 1}
            style="opacity: {stage === 2 ? 0 : 1}"
    ></div>

    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center space-y-8 px-4">
        <h1 class="text-2xl font-light tracking-wider">Bienvenue sur Lights Em Up</h1>
        <p>Pour profiter pleinement de l’expérience, nous vous recommandons de visiter ce site en plein écran (touche F11).</p>
        <p>Dans ce jeu, votre objectif est de rallumer la lumière dans chaque salle. Pour cela, explorez attentivement chaque pièce et cliquez sur différents éléments. Certains d’entre eux pourraient déclencher des mini-jeux à résoudre !</p>
        <p>Chaque mini-jeu réussi vous aidera à restaurer la lumière, pour illuminer toute la ville et vivre une fête des lumières inoubliable ! Bonne chance et amusez-vous bien !</p>

        <button
                on:click={handleSwitchClick}
                type="button"
                title="Activer l’interrupteur"
                class="p-0 border-none bg-transparent"
        >
            <img
                    src="/index/lightswitch.png"
                    alt="Interrupteur"
                    class="block cursor-pointer"
                    class:scale-y-[-1]={flipped}
            />
        </button>
    </div>
</div>

<LampeTorche />

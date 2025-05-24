<script>
    export let style = "";
</script>

<style>
    .lantern-wrapper {
        position: absolute;
        will-change: transform;
        animation: floatUpDown 6s ease-in-out infinite;
        /* On applique le style passé en prop */
    }

    .lantern {
        position: relative;
        width: 60px;
        height: 100px;
        background: linear-gradient(180deg, #442a0f 0%, #2d1802 100%);
        border-radius: 20px 20px 12px 12px;
        box-shadow:
                0 0 8px 3px rgba(255, 182, 65, 0.8),
                inset 0 2px 5px rgba(255, 198, 84, 0.7),
                inset 0 -5px 15px #e8bb5f;
    }

    /* La base, type poignée */
    .handle {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 12px;
        height: 20px;
        background: #311a00;
        border-radius: 6px;
        box-shadow: 0 0 5px rgba(255, 182, 65, 0.6);
    }

    /* La lumière qui brille à l'intérieur */
    .light {
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 60px;
        background: radial-gradient(circle at center, #ffd87f 30%, transparent 80%);
        border-radius: 50% / 70%;
        filter: drop-shadow(0 0 8px #ffd87f);
        animation: pulseLight 3s ease-in-out infinite;
    }

    /* Petit halo autour */
    .glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 140px;
        background: radial-gradient(circle, rgba(255, 210, 120, 0.4) 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(20px);
        pointer-events: none;
    }

    @keyframes pulseLight {
        0%, 100% {
            filter: drop-shadow(0 0 8px #ffd87f);
            opacity: 1;
        }
        50% {
            filter: drop-shadow(0 0 16px #ffea9b);
            opacity: 0.8;
        }
    }

    @keyframes floatUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
</style>

<div class="lantern-wrapper" style={style} aria-label="Lanterne flottante" role="img" aria-live="polite">
    <div class="glow"></div>
    <div class="lantern">
        <div class="handle"></div>
        <div class="light"></div>
    </div>
</div>

<script>
    import { onMount, onDestroy } from "svelte";

    export let size = 8;
    export let minSpeed = 60;
    export let maxSpeed = 140;
    export let colorSeed = Math.random() * 1000;

    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let phase = Math.random() * Math.PI * 2;
    let angle = Math.random() * 2 * Math.PI;
    let speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
    let nextTurn = Date.now() + 500 + Math.random() * 1000;

    // Edge avoidance parameters
    const EDGE_AVOID_DIST = 15; // vw/vh
    const REPULSE_STRENGTH = 0.13; // how much the repulsion vector influences direction per frame

    let animationId;

    function move() {
        const now = Date.now();
        const dt = 1 / 60;

        // Compute normalized repulsion vector from edges
        let repelX = 0, repelY = 0;
        if (x < EDGE_AVOID_DIST) repelX += (EDGE_AVOID_DIST - x) / EDGE_AVOID_DIST;
        if (x > 100 - EDGE_AVOID_DIST) repelX -= (x - (100 - EDGE_AVOID_DIST)) / EDGE_AVOID_DIST;
        if (y < EDGE_AVOID_DIST) repelY += (EDGE_AVOID_DIST - y) / EDGE_AVOID_DIST;
        if (y > 100 - EDGE_AVOID_DIST) repelY -= (y - (100 - EDGE_AVOID_DIST)) / EDGE_AVOID_DIST;

        // Only alter if we have a repulsion vector
        if (repelX !== 0 || repelY !== 0) {
            const repelAngle = Math.atan2(repelY, repelX);
            // Smoothly "turn" toward the away-from-edge direction
            const a = Math.atan2(Math.sin(angle - repelAngle), Math.cos(angle - repelAngle));
            angle -= a * REPULSE_STRENGTH;
        }

        // Move forward
        x += Math.cos(angle) * speed * dt;
        y += Math.sin(angle) * speed * dt;

        // Clamp if outside (should rarely happen)
        if (x < 0) x = 0;
        if (x > 100) x = 100;
        if (y < 0) y = 0;
        if (y > 100) y = 100;

        // Occasional direction & speed change
        if (now > nextTurn) {
            angle += (Math.random() - 0.5) * Math.PI * 0.7;
            speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            nextTurn = now + 500 + Math.random() * 1000;
        }

        phase += 0.13 + Math.random() * 0.06;
        if (phase > Math.PI * 2) phase -= Math.PI * 2;

        animationId = requestAnimationFrame(move);
    }

    onMount(() => {
        animationId = requestAnimationFrame(move);
    });

    onDestroy(() => {
        if (animationId) cancelAnimationFrame(animationId);
    });

    function fireflyColor(phase, seed) {
        const glow = 0.7 + 0.3 * Math.sin(phase + seed);
        const r = Math.floor(240 + 15 * glow);
        const g = Math.floor(240 + 15 * glow);
        const b = Math.floor(120 + 65 * glow);
        return `rgba(${r},${g},${b},1)`;
    }
    function glowStrength(phase, seed) {
        return 0.8 + 0.7 * Math.abs(Math.sin(phase + seed));
    }
</script>

<style>
    .firefly {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        will-change: transform, filter;
        transition: box-shadow 0.1s, filter 0.1s;
    }
</style>

<div
        class="firefly"
        style="
    left: {x}vw;
    top: {y}vh;
    width: {size}px;
    height: {size}px;
    opacity: {0.8 + 0.2 * Math.sin(phase)};
    filter: blur({0.2 + 0.5 * Math.abs(Math.sin(phase + colorSeed/10))}px);
    background: radial-gradient(circle, {fireflyColor(phase, colorSeed)} 85%, rgba(255,255,161,0.02) 100%);
    box-shadow:
      0 0 {5 + 7 * glowStrength(phase, colorSeed)}px {1 + 1.5 * glowStrength(phase, colorSeed)}px {fireflyColor(phase + 1.5, colorSeed)},
      0 0 {18 + 16 * glowStrength(phase, colorSeed)}px {2 + 2 * glowStrength(phase, colorSeed)}px rgba(255,255,200,{0.17 * glowStrength(phase, colorSeed)});
  "
></div>
<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { tsParticles } from "tsparticles-engine";
    import { loadAll } from "tsparticles-all";;
    import {browser} from "$app/environment";

    onMount(async () => {
        if (browser) {
            await loadAll(tsParticles);
            await tsParticles.load({ id: containerId, options: configs });
        }
    });

    let containerId = "tsparticles";

    const configs = {
        name: "Fireworks Mask",
        fullScreen: { enable: true },
        emitters: {
            direction: "top",
            life: { count: 0, duration: 0.1, delay: 0.1 },
            rate: { delay: 0.15, quantity: 1 },
            size: { width: 100, height: 0 },
            position: { y: 100, x: 50 },
        },
        particles: {
            number: { value: 0 },
            destroy: {
                bounds: { top: 30 },
                mode: "split",
                split: {
                    count: 1,
                    factor: { value: 0.333333 },
                    rate: { value: 100 },
                    particles: {
                        stroke: { width: 0 },
                        color: { value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"] },
                        number: { value: 0 },
                        collisions: { enable: false },
                        destroy: { bounds: { top: 0 } },
                        opacity: {
                            value: { min: 0.1, max: 1 },
                            animation: { enable: true, speed: 0.7, sync: false, startValue: "max", destroy: "min" },
                        },
                        effect: { type: "trail", options: { trail: { length: { min: 5, max: 10 } } } },
                        shape: { type: "circle" },
                        size: { value: 2, animation: { enable: false } },
                        life: { count: 1, duration: { value: { min: 1, max: 2 } } },
                        move: {
                            enable: true,
                            gravity: { enable: true, acceleration: 9.81, inverse: false },
                            decay: 0.1,
                            speed: { min: 10, max: 25 },
                            direction: "outside",
                            outModes: "destroy",
                        },
                    },
                },
            },
            life: { count: 1 },
            effect: { type: "trail", options: { trail: { length: { min: 10, max: 30 }, minWidth: 1, maxWidth: 1 } } },
            rotate: { path: true },
            shape: { type: "circle" },
            size: { value: 1 },
            move: {
                enable: true,
                gravity: { acceleration: 15, enable: true, inverse: true, maxSpeed: 100 },
                speed: { min: 10, max: 20 },
                outModes: { default: "destroy", top: "none" },
            },
        },
    };

    onMount(async () => {
        await loadAll(tsParticles);
        await tsParticles.load({ id: containerId, options: configs });
    });

    onDestroy(() => {
        tsParticles.domItem(containerId)?.destroy();
    });
</script>

<style>
    #tsparticles {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        pointer-events: none;
    }

    #refresh-config {
        bottom: 5px;
        left: 5px;
        position: fixed;
        z-index: 1000;
    }
</style>

<div id={containerId}></div>

<script>
    import LightBeam from './LightBeam.svelte';

    export let on = true;
    export let x = 0;
    export let y = 0;
    export let scale = 2;
    let lampOffImg = '/lamp_off.png';
    let lampOnImg = '/lamp_on.png';

    const baseWidth = 48;
    const baseHeight = 128;
    $: width = baseWidth * scale;
    $: height = baseHeight * scale;

    // Emission point: horizontally centered, just below the lamp "bulb"
    $: emitX = x + width / 2;
    $: emitY = y + height * 0.2; // tweak multiplier if your lamp head is higher/lower in the image

    // Beam end: straight down from emission point
    $: endY = emitX;
    $: endX = y + height; // change multiplier for longer/shorter beam

    $: beamRadius = 40 * scale;
</script>

<LightBeam
        fromX={emitX}
        fromY={emitY}
        toX={endX}
        toY={endY}
        radius={beamRadius}
        color="#fffbe9"
        intensity={on ? 1 : 0}
/>

<div
        class="lamp-img-container"
        style="left:{x}px; top:{y}px; width:{width}px; height:{height}px; position:absolute;"
>
    <img
            class="lamp-img"
            src={on ? lampOnImg : lampOffImg}
            alt={on ? "Lamp post on" : "Lamp post off"}
            draggable="false"
    />
</div>

<style>
    .lamp-img-container {
        pointer-events: none;
        z-index: 15;
    }
    .lamp-img {
        display: block;
        pointer-events: none;
        user-select: none;
        width: 100%;
        height: 100%;
        object-fit: contain;
        aspect-ratio: 3/8;
    }
</style>
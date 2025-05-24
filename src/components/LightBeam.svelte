<script>
    export let fromX = 0;
    export let fromY = 0;
    export let toX = 0;
    export let toY = 0;
    export let radius = 100;
    export let color = "#fffbe9";
    export let intensity = 1;

    $: dx = toX - fromX;
    $: dy = toY - fromY;
    $: length = Math.sqrt(dx*dx + dy*dy);
    $: angle = Math.atan2(dy, dx) * 180 / Math.PI;
    $: gradId = `beam-fade-${Math.floor(fromX)}-${Math.floor(fromY)}-${Math.floor(toX)}-${Math.floor(toY)}`;
</script>

<div
        class="light-beam"
        style="
        left: {fromX}px;
        top: {fromY}px;
        width: {radius * 2}px;
        height: {length}px;
        transform: translate(-50%, 0) rotate({angle}deg);
        opacity: {intensity};
        position: absolute;
        pointer-events: none;
        z-index: 10;
        mix-blend-mode: screen;"
>
<svg width={radius*2} height={length} style="display:block;" pointer-events="none">
    <defs>
        <radialGradient id={gradId} cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
            <stop offset="0%" stop-color={color} stop-opacity="0.7"/>
            <stop offset="40%" stop-color={color} stop-opacity="0.25"/>
            <stop offset="100%" stop-color={color} stop-opacity="0"/>
        </radialGradient>
    </defs>
    <ellipse
            cx={radius}
            cy={length}
            rx={radius}
            ry={radius/2}
            fill={`url(#${gradId})`}
    />
    <polygon
            points={`${radius},0 0,${length} ${radius*2},${length}`}
            fill={`url(#${gradId})`}
    />
</svg>
</div>
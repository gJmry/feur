<script>
    // Lamp-on state and appearance controls
    export let isOn = true;
    export let width = "80px";
    export let height = "72vh";
    export let top = "0";
    export let left = "0";
    export let margin = "0 auto";
    export let scale = 1;
    export let extraTransform = "";

    // Beam shape/color allows for ambient "lamp glow" (not torch!)
    export let lightColor = "#dac470cc";
    export let lightSpread = "650px";
    export let lightHeight = "64vh";
    export let blendMode = "screen";
    export let lightLeft = "-274px";
    export let lightBottom = "1.5%";
</script>

<style>
    :root {
        --pole-dark: #1e2635;
        --pole-light: #233451;
    }
    .streetlamp {
        position: relative;
        pointer-events: none; /* So lamp can't block torch interactions */
    }
    .base {
        bottom: 0;
        right: 0;
        position: absolute;
        width: 81%;
        height: 24%;
        background: linear-gradient(-94deg, var(--pole-dark) 0 23%, #fff0 calc(23% + 1px) 100%), linear-gradient(-1deg, var(--pole-dark) 0 3.65%, #fff0 calc(1.65% + 1px) 100%), linear-gradient(85deg, var(--pole-dark) 0 58%, var(--pole-light) calc(58% + 1px) 100%);
        border-radius: 2px;
        clip-path: polygon(15% 0, 76% 0, 95% 99%, 0% 99%);
        z-index: 1;
    }
    .basetop {
        background: #1e2634;
        width: 75%;
        height: 3%;
        position: absolute;
        bottom: 24%;
        left: 16%;
        border-radius: 2px;
        z-index: 2;
        transform: rotate(-0.5deg);
    }
    .pole {
        position: absolute;
        width: 25%;
        height: 56.5%;
        background: linear-gradient(-1deg, var(--pole-dark) 0 1.65%, #fff0 calc(1.65% + 1px) 100%), linear-gradient(-91deg, var(--pole-dark) 0 35%, #fff0 calc(35% + 1px) 100%), linear-gradient(89.5deg, var(--pole-dark) 0 40%, var(--pole-light) calc(40% + 1px) 100%);
        bottom: 26.25%;
        left: 45%;
        clip-path: polygon(17% 0, 60% 0, 95% 99%, 0% 99%);
        z-index: 1;
    }
    .poletop {
        width: 20%;
        height: 1.5%;
        background: var(--pole-dark);
        position: absolute;
        bottom: 82%;
        left: 44%;
        z-index: 1;
        clip-path: polygon(0% 0, 100% 0, 95% 65%, 10% 72%);
    }
    .head {
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: 83%;
        z-index: 2;
    }
    .head .top {
        background: conic-gradient(from 131deg at 55% 0, var(--pole-light) 0 12%, var(--pole-dark) 13% 29.5%, #fff0 0 100%);
        width: 100%;
        height: 30%;
        top: 20%;
        position: absolute;
        transform: rotate(-3deg);
    }
    .head .top:before {
        content: "";
        position: absolute;
        background: var(--pole-light);
        width: 8px;
        height: 12px;
        border-radius: 100%;
        left: 48%;
        top: -40%;
        border: 3px solid var(--pole-dark);
        border-left-width: 0;
    }
    .head .top:after {
        content: "";
        position: absolute;
        background: var(--pole-dark);
        width: 4px;
        height: 12px;
        border-radius: 100%;
        left: 52%;
        top: -70%;
    }
    .head .bot {
        width: 75%;
        height: 5%;
        background:
                linear-gradient(45deg, #fff0 12%, var(--pole-dark) 0 65%, #fff0 0 100%),
                linear-gradient(-50deg, #fff0 8%, var(--pole-dark) 0 65%, #fff0 0 100%);
        left: 17%;
        position: absolute;
        bottom: 1%;
        transform: rotate(-3deg);
    }
    .glass {
        background:
                linear-gradient(-79deg, #fff0 0 12%, var(--pole-dark) 13% 16%, #fff0 17% 100%),
                conic-gradient(from -46deg at 53% 200%, #fff0 0 13%, var(--pole-dark) 13.2% 14%, #fff0 14.2% 100%),
                linear-gradient(70deg, #fff0 0 21%, var(--pole-dark) 22% 25%, #fff0 26% 100%),
                radial-gradient(circle at 37% 250%, #fff0 0 73%, #e4ce8b 75% 100%),
                radial-gradient(circle at 37% 300%, #fff0 0 73%, #e4ce8b 75% 100%),
                conic-gradient(from -46deg at 53% 200%, #fff0 0 7%, #f5f3b0 0 13%, var(--pole-dark) 13.2% 14%, #fff0 14.2% 100%),
                linear-gradient(-79deg, #fff0 0 12%, var(--pole-dark) 13% 16%, #ffe5ad 17% 50%, #fff0 17% 100%);
        background-repeat: no-repeat;
        background-size: 100% 100%, 100% 100%, 100% 100%, 33% 42%, 50% 35%, 100% 100%;
        background-position: 0 0, 0 0, 0 0, 90% 0, 20% 0, 0 0;
        width: 100%;
        height: 45%;
        top: 50%;
        position: absolute;
        transform: rotate(-3deg);
        transition: opacity 0.3s;
        opacity: 0.5;
    }
    .glass .on {
        opacity: 1;
    }
    .light {
        position: absolute;
        clip-path: polygon(43% 1%, 53% 0.35%, 100% 100%, 0 100%);
        transition: opacity 0.8s;
        opacity: 0;
        pointer-events: none;
        mix-blend-mode: screen;
        z-index: 999;
    }
    .light .on {
        opacity: 1;
    }
</style>

<div
        class="streetlamp"
        style="
        width: {width};
        height: {height};
        top: {top};
        left: {left};
        margin: {margin};
        transform: scale({scale}) {extraTransform};
    "
>
    <div class="base"></div>
    <div class="basetop"></div>
    <div class="pole"></div>
    <div class="poletop"></div>
    <div class="head">
        <div class="top"></div>
        <div class="glass {isOn  ? 'on' : ''}" style="z-index:{isOn ? 100 : 0}"></div>
        <div class="bot"></div>
    </div>
    <div
            class="light {isOn ? 'on' : ''}"
            style="
            z-index:999;
            width: {lightSpread};
            height: {lightHeight};
            left: {lightLeft};
            bottom: {lightBottom};
            background: linear-gradient(180deg, {lightColor}, {lightColor}33 90%, #fff0 100%);
            mix-blend-mode: {blendMode};
        "
    ></div>
</div>
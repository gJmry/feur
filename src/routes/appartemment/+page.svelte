<script>
    import LampeTorche from "../../components/LampeTorche.svelte";
</script>

<div class="relative min-h-screen bg-cover bg-center"
     style="background-image: url('/index/k.webp')">

    <a href="/toit"
       class="absolute top-0 left-0 h-full w-[15%] bg-transparent hover:bg-white/10 transition"
       title="Aller vers le toit">
        <div class="absolute top-1/2 -translate-y-1/2 right-2 text-white text-[15rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-move-left-icon lucide-move-left">
                <path d="M6 8L2 12L6 16"/>
                <path d="M2 12H22"/>
            </svg>
        </div>
    </a>

    <a href="/accueil"
       class="absolute top-0 right-0 h-full w-[15%] bg-transparent hover:bg-white/10 transition"
       title="Aller vers l'accueil">
        <div class="absolute top-1/2 -translate-y-1/2 left-2 text-white text-[15rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-move-right-icon lucide-move-right">
                <path d="M18 8L22 12L18 16"/>
                <path d="M2 12H22"/>
            </svg>
        </div>
    </a>
</div>

<LampeTorche/>
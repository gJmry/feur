<script>
import LampeTorche from "../../components/LampeTorche.svelte";
</script>

<div class="min-h-screen bg-center bg-cover bg-no-repeat"
     style="background-image: url('https://www.lyoncapitale.fr/wp-content/uploads/2018/11/Fontaine-des-Jacobins-Lyon-la-nuit-30-ans-plan-lumie%CC%80res-2018-%C2%A9-Tim-Douet_0127-770x433.jpeg');">

    <a href="/ruelle-1"
       class="absolute top-0 right-0 h-full w-[15%] bg-transparent hover:bg-white/10 transition"
       title="Aller vers la ruelle">
        <div class="absolute top-1/2 -translate-y-1/2 right-2 text-white text-[15rem]">&#10140;</div>
    </a>
</div>

<LampeTorche />
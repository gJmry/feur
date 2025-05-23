<script>
    import LampeTorche from "../../components/LampeTorche.svelte";
</script>

<style>
    .bg-test {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background-image: url("image7.png");
        background-size: cover;
        background-position: center;
        z-index: 0;
    }
</style>

<div class="bg-test"></div>
<LampeTorche />
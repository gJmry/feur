<script>
    import FirefliesGroup from "../../components/FirefliesGroup.svelte";
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
<LampeTorche />
<FirefliesGroup count={30} minSize={2} maxSize={7} minSpeed={10} maxSpeed={100} />
<div class="bg-test"></div>
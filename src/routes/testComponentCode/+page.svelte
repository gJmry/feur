<script>
    import EnigmeCode from "../../components/EnigmeCode.svelte";

    let showEnigme = true;

    function handleWin() {
        showEnigme = false; // Cache le composant lorsque l'événement `win` est reçu
    }
</script>

<div class="background min-h-screen">
    {#if showEnigme}
        <EnigmeCode on:win={handleWin} code="7658" />
    {/if}
</div>

<style>
    .background {
        background-image: url("background/modern-gold-background-free-vector.jpg");
        background-size: cover;
        background-position: center;
    }
</style>
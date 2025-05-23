<script>
    import EnigmeFils from "../../components/EnigmeFils.svelte";

    let showEnigme = true;

    function handleWin() {
        showEnigme = false; // Cache le composant lorsque l'événement `win` est reçu
    }
</script>

<div class="background min-h-screen">
    {#if showEnigme}
        <EnigmeFils on:win={handleWin} />
    {/if}
</div>

<style>
    .background {
        background-image: url("background/modern-gold-background-free-vector.jpg");
        background-size: cover;
        background-position: center;
    }
</style>
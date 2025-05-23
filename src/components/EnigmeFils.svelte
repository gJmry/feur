<script>
    import { onMount, createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher(); // Permet d'émettre des événements

    let win = false;

    let noeudsGaucheChoisi = null;
    let noeudsDroiteChoisi = null;

    let noeudsGauche = [
        { id: 1, color: "red", side: "left" },
        { id: 2, color: "blue", side: "left" },
        { id: 3, color: "green", side: "left" },
        { id: 4, color: "yellow", side: "left" }
    ];

    let noeudsDroite = [
        { id: 1, color: "red", side: "right" },
        { id: 2, color: "blue", side: "right" },
        { id: 3, color: "green", side: "right" },
        { id: 4, color: "yellow", side: "right" }
    ];

    let lignes = [];

    function handleClick(noeud, side, event) {
        const greyDivRect = document.querySelector(".grey-div").getBoundingClientRect();
        const x = event.target.getBoundingClientRect().x + 25 - greyDivRect.left;
        const y = event.target.getBoundingClientRect().y + 25 - greyDivRect.top;

        if (side === "left") {
            noeudsGaucheChoisi = { ...noeud, x, y };
        } else {
            noeudsDroiteChoisi = { ...noeud, x, y };
        }

        if (noeudsGaucheChoisi && noeudsDroiteChoisi) {
            if (noeudsGaucheChoisi.id === noeudsDroiteChoisi.id) {
                lignes = [
                    ...lignes,
                    {
                        x1: noeudsGaucheChoisi.x,
                        y1: noeudsGaucheChoisi.y,
                        x2: noeudsDroiteChoisi.x,
                        y2: noeudsDroiteChoisi.y,
                        color: noeudsGaucheChoisi.color
                    }
                ];
            }
            noeudsGaucheChoisi = null;
            noeudsDroiteChoisi = null;

            if (lignes.length === noeudsGauche.length) {
                win = true;
                dispatch("win"); // Émet l'événement `win`
            }
        }
    }

    function melanger(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return [...array];
    }

    onMount(() => {
        noeudsGauche = melanger(noeudsGauche);
        noeudsDroite = melanger(noeudsDroite);
    });
</script>

<style>
    .blurred-div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .grey-div {
        position: relative; /* Important pour le SVG */
        width: 450px;
        height: 600px;
        background-color: grey;
        border-radius: 10px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 20px;
    }

    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }

    .noeud {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid black;
    }

    .lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>

<div class="blurred-div">
    <div class="grey-div">
        <svg class="lines">
            {#each lignes as ligne}
                <line
                    x1={ligne.x1}
                    y1={ligne.y1}
                    x2={ligne.x2}
                    y2={ligne.y2}
                    stroke={ligne.color}
                    stroke-width="4"
                />
            {/each}
        </svg>
        <div class="container">
            <div class="column">
                {#each noeudsGauche as noeud}
                    <button
                        class="noeud"
                        style="background-color: {noeud.color};"
                        on:click={(event) => handleClick(noeud, "left", event)}
                        aria-label={`Nœud gauche de couleur ${noeud.color}`}
                    ></button>
                {/each}
            </div>
            <div class="column">
                {#each noeudsDroite as noeud}
                    <button
                        class="noeud"
                        style="background-color: {noeud.color};"
                        on:click={(event) => handleClick(noeud, "right", event)}
                        aria-label={`Nœud droit de couleur ${noeud.color}`}
                    ></button>
                {/each}
            </div>
        </div>
    </div>
</div>

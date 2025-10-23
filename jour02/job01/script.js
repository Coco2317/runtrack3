function citation() {
    // Récupère le contenu du paragraphe avec id="citation"
    const texte = document.getElementById("citation").textContent;

    // Affiche le contenu dans la console
    console.log(texte);
}

// Exécute la fonction quand on clique sur le bouton
document.getElementById("button").addEventListener("click", citation);

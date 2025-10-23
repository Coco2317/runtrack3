const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    const key = event.key;

    // On vérifie si la touche est une lettre (a-z)
    if (key.length === 1 && key.match(/[a-z]/i)) {

        // Si le focus est dans le textarea
        if (document.activeElement === textarea) {
            // Empêche la lettre de s’écrire automatiquement
            event.preventDefault();
            // Et on l’ajoute nous-mêmes deux fois
            textarea.value += key + key;
        } else {
            // Si focus ailleurs, ajoute une fois
            textarea.value += key;
        }
    }
});

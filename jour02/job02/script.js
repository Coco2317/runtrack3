function showhide() {
    // Vérifie si un article existe déjà dans la page
    const existingArticle = document.querySelector("article");

    if (existingArticle) {
        // S'il existe, on le supprime (disparition)
        existingArticle.remove();
    } else {
        // Sinon, on le crée et on l'ajoute à la page
        const article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

// Quand on clique sur le bouton, on appelle showhide()
document.getElementById("button").addEventListener("click", showhide);

let count = 0; // compteur initial

function addone() {
    count++; // on ajoute 1
    document.getElementById("compteur").textContent = count; // met à jour le texte
}

// on déclenche la fonction au clic
document.getElementById("button").addEventListener("click", addone);

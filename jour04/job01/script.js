document.getElementById("button").addEventListener("click", async () => {
    try {
        const res = await fetch("expression.txt");
        if (!res.ok) throw new Error();
        document.getElementById("resultat").textContent = await res.text();
    } catch {
        document.getElementById("resultat").textContent = "Erreur de chargement.";
    }
});

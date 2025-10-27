const results = document.getElementById("results");
const filterBtn = document.getElementById("filter");

filterBtn.addEventListener("click", async () => {
    try {
        const res = await fetch("pokemon.json");
        if (!res.ok) throw new Error("Erreur de chargement du JSON");
        const pokemons = await res.json();

        const id = document.getElementById("id").value.trim();
        const name = document.getElementById("name").value.trim().toLowerCase();
        const type = document.getElementById("type").value;

        // Filtrage
        const filtered = pokemons.filter(p =>
            (!id || p.id == id) &&
            (!name || p.name.english.toLowerCase().includes(name)) &&
            (!type || p.type.includes(type))
        );

        // Affichage
        results.innerHTML = filtered.length
            ? filtered.map(p => `
                <article>
                    <h3>${p.name.english}</h3>
                    <p><strong>ID :</strong> ${p.id}</p>
                    <p><strong>Type :</strong> ${p.type.join(", ")}</p>
                </article>
            `).join("")
            : "<p>Aucun résultat trouvé.</p>";

    } catch (e) {
        results.textContent = "Erreur de chargement des données.";
        console.error(e);
    }
});

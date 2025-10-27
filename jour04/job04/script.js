const tableBody = document.querySelector("#usersTable tbody");
const updateBtn = document.getElementById("update");

async function loadUsers() {
    try {
        const res = await fetch("users.php");
        if (!res.ok) throw new Error("Erreur de chargement");
        const users = await res.json();

        tableBody.innerHTML = users.length
            ? users.map(u => `
                <tr>
                    <td>${u.id}</td>
                    <td>${u.nom}</td>
                    <td>${u.prenom}</td>
                    <td>${u.email}</td>
                </tr>
              `).join("")
            : "<tr><td colspan='4'>Aucun utilisateur trouvé.</td></tr>";

    } catch (e) {
        tableBody.innerHTML = "<tr><td colspan='4'>Erreur serveur.</td></tr>";
        console.error(e);
    }
}

updateBtn.addEventListener("click", loadUsers);

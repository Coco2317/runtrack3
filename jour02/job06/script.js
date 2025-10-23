const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];

let userInput = [];

document.addEventListener("keydown", (event) => {
    userInput.push(event.key);

    // On garde uniquement les 10 dernières touches
    if (userInput.length > konamiCode.length) {
        userInput.shift();
    }

    // Vérifie si la séquence correspond au code Konami
    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
        activateKonamiMode();
    }
});

function activateKonamiMode() {
    document.body.classList.add("konami");
    document.body.innerHTML = `
        <h1>Qui est la première personne à avoir pensé à faire ça??</h1>
    
    `;
}

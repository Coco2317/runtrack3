// Fonction utilitaire : teste si un nombre est premier
function estPremier(nombre) {
    if (nombre < 2) return false; // 0, 1 et négatifs ne sont pas premiers

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

// Fonction principale : somme si les deux sont premiers
function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Tests
console.log(sommenombrespremiers(3, 5));   // 8
console.log(sommenombrespremiers(7, 11));  // 18
console.log(sommenombrespremiers(4, 5));   // false
console.log(sommenombrespremiers(9, 9));   // false

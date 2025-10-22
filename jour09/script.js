function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    } else {
        console.log("Erreur : le paramètre 'order' doit être 'asc' ou 'desc'.");
        return false;
    }

    return numbers;
}

// Tests
console.log(tri([5, 2, 8, 1, 9], "asc"));   // [1, 2, 5, 8, 9]
console.log(tri([5, 2, 8, 1, 9], "desc"));  // [9, 8, 5, 2, 1]
console.log(tri([3, 7, 4], "test"));        // erreur

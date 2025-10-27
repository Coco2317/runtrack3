function jsonValueKey(jsonString, key) {
    try {
        const data = JSON.parse(jsonString);
        return data[key] ?? null;
    } catch {
        return null;
    }
}

// --- Tests ---
const jsonStr = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(jsonValueKey(jsonStr, "city"));     
console.log(jsonValueKey(jsonStr, "name"));      
console.log(jsonValueKey(jsonStr, "zipcode"));   

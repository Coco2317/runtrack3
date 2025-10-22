function bisextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}


console.log(bisextile(2020)); // true
console.log(bisextile(1900)); // false
console.log(bisextile(2000)); // true
console.log(bisextile(2025)); // false

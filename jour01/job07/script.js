function jourtravaille(date) {
    const joursFeries2025 = [
        "2025-01-01", // Jour de l'An
        "2025-04-21", // Lundi de Pâques
        "2025-05-01", // Fête du Travail
        "2025-05-08", // Victoire 1945
        "2025-05-29", // Ascension
        "2025-06-09", // Lundi de Pentecôte
        "2025-07-14", // Fête nationale
        "2025-08-15", // Assomption
        "2025-11-01", // Toussaint
        "2025-11-11", // Armistice
        "2025-12-25"  // Noël
    ];

    const jour = date.getDate();
    const mois = date.toLocaleString('fr-FR', { month: 'long' });
    const annee = date.getFullYear();
    const dateStr = date.toISOString().split('T')[0];
    const jourSemaine = date.getDay(); // 0 = dimanche, 6 = samedi

    if (joursFeries2025.includes(dateStr)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}

// Tests
jourtravaille(new Date("2025-01-01")); // férié
jourtravaille(new Date("2025-04-21")); // férié (Lundi de Pâques)
jourtravaille(new Date("2025-06-10")); // travaillé (mardi)
jourtravaille(new Date("2025-07-12")); // week-end

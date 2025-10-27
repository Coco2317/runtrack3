<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour 04 - Job 03</title>
</head>
<body>

    <h1>Filtrer les Pokémon</h1>

    <form id="filterForm">
        <input type="text" id="id" placeholder="ID">
        <input type="text" id="name" placeholder="Nom">
        
        <select id="type">
            <option value="">-- Type --</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
        </select>

        <input type="button" id="filter" value="Filtrer">
    </form>

    <section id="results"></section>

    <script src="script.js"></script>
</body>
</html>

const API_KEY = "TA_CLE_API";
const headers = { "x-apisports-key": API_KEY };

// MATCHS DU JOUR
fetch("https://v3.football.api-sports.io/fixtures?date=2025-01-01", { headers })
.then(res => res.json())
.then(data => {
const container = document.getElementById("matches");
data.response.forEach(match => {
container.innerHTML += `
<div class="card">
<h4>${match.teams.home.name} ${match.goals.home ?? "-"}
- ${match.goals.away ?? "-"} ${match.teams.away.name}</h4>
<p>${match.fixture.status.long}</p>
</div>
`;
});
});

<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Classement</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header>
<h1>Classements ⚽</h1>
<nav>
<a href="index.html">Accueil</a>
<a href="matchs.html">Matchs</a>
</nav>
</header>

<main>
<table id="standings">
<tr>
<th>#</th><th>Équipe</th><th>Pts</th><th>MJ</th>
</tr>
</table>
</main>

<script src="script.js"></script>
</body>
</html>

const API_KEY = "TA_CLE_API";
const headers = { "x-apisports-key": API_KEY };

const competitionSelect = document.getElementById("competitionSelect");
const matchesContainer = document.getElementById("matches");

function loadMatches(leagueId) {
const today = new Date().toISOString().split("T")[0];

fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=2024&date=${today}`, { headers })
.then(res => res.json())
.then(data => {
matchesContainer.innerHTML = "";

if (data.response.length === 0) {
matchesContainer.innerHTML = "<p>Aucun match aujourd’hui</p>";
return;
}

data.response.forEach(match => {
matchesContainer.innerHTML += `
<div class="card">
<h4>
${match.teams.home.name}
${match.goals.home ?? "-"}
-
${match.goals.away ?? "-"}
${match.teams.away.name}
</h4>
<p>${match.fixture.status.long}</p>
</div>
`;
});
});
}

// Chargement initial
loadMatches(competitionSelect.value);

// Changement de compétition
competitionSelect.addEventListener("change", () => {
loadMatches(competitionSelect.value);
});

function loadStandings(leagueId) {
fetch(`https://v3.football.api-sports.io/standings?league=${leagueId}&season=2024`, { headers })
.then(res => res.json())
.then(data => {
const table = document.getElementById("standings");
table.innerHTML = `
<tr>
<th>#</th>
<th>Équipe</th>
<th>Pts</th>
<th>MJ</th>
</tr>
`;

// Certaines compétitions n’ont pas de classement
if (!data.response.length) {
table.innerHTML += `<tr><td colspan="4">Pas de classement disponible</td></tr>`;
return;
}

const standings = data.response[0].league.standings[0];
standings.forEach(team => {
table.innerHTML += `
<tr>
<td>${team.rank}</td>
<td>${team.team.name}</td>
<td>${team.points}</td>
<td>${team.all.played}</td>
</tr>
`;
});
});
}

// Chargement initial
loadStandings(competitionSelect.value);

// Changement compétition
competitionSelect.addEventListener("change", () => {
loadStandings(competitionSelect.value);
});

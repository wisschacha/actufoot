const API_KEY = "87a14269536cc2d81bb4d0b1ce3398b0";
const API_URL = "https://v3.football.api-sports.io";

const matchs = JSON.parse(localStorage.getItem("matchs")) || [];
const classement = JSON.parse(localStorage.getItem("classement")) || [];

// ================= MATCHS DU JOUR =================
//const matchs = [
//  {
//    league: "Ligue 1",
//    team1: "PSG",
//    team2: "Marseille",
//    time: "20:45",
//    stadium: "Parc des Princes"
//  },
//  {
//    league: "Premier League",
//    team1: "Manchester City",
//    team2: "Liverpool",
//    time: "18:30",
//    stadium: "Etihad Stadium"
//  }
//];

async function chargerMatchsAPI() {
  const container = document.querySelector(".matchs");
  if (!container) return;

  container.innerHTML = "<h2>Matchs du jour</h2>";

  const res = await fetch(`${API_URL}/fixtures?date=2025-12-14`, {
    headers: {
      "x-apisports-key": API_KEY
    }
  });

  const data = await res.json();

  data.response.forEach(match => {
    const div = document.createElement("div");
    div.className = "match-card";

    div.innerHTML = `
      <span class="league">${match.league.name}</span>
      <div class="teams">
        <span>${match.teams.home.name}</span>
        <strong>vs</strong>
        <span>${match.teams.away.name}</span>
      </div>
      <div class="info">
        <span>${match.fixture.date.substring(11,16)}</span>
        <span>${match.fixture.venue.name}</span>
      </div>
    `;

    container.appendChild(div);
  });
}

function afficherMatchs() {
  const container = document.querySelector(".matchs");
  if (!container) return;

  container.innerHTML = "<h2>Matchs du jour</h2>";

  matchs.forEach(match => {
    const div = document.createElement("div");
    div.className = "match-card";

    div.innerHTML = `
      <span class="league">${match.league}</span>
      <div class="teams">
        <span>${match.team1}</span>
        <strong>vs</strong>
        <span>${match.team2}</span>
      </div>
      <div class="info">
        <span>${match.time}</span>
        <span>${match.stadium}</span>
      </div>
    `;

    container.appendChild(div);
  });
}

// ================= CLASSEMENT =================
//const classement = [
//  { pos: 1, equipe: "PSG", pts: 38, j: 15, g: 12, n: 2, p: 1, diff: "+25" },
//  { pos: 2, equipe: "Monaco", pts: 32, j: 15, g: 10, n: 2, p: 3, diff: "+15" },
//  { pos: 3, equipe: "Marseille", pts: 29, j: 15, g: 8, n: 5, p: 2, diff: "+10" }
//];

function afficherClassement() {
  const tbody = document.querySelector(".classement-table tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  classement.forEach(team => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${team.pos}</td>
      <td>${team.equipe}</td>
      <td>${team.pts}</td>
      <td>${team.j}</td>
      <td>${team.g}</td>
      <td>${team.n}</td>
      <td>${team.p}</td>
      <td>${team.diff}</td>
    `;

    tbody.appendChild(tr);
  });
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  afficherMatchs();
  afficherClassement();
});





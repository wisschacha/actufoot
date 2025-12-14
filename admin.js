// ---------- MATCHS ----------
let matchs = JSON.parse(localStorage.getItem("matchs")) || [];

const matchForm = document.getElementById("matchForm");
if (matchForm) {
  matchForm.addEventListener("submit", e => {
    e.preventDefault();

    const match = {
      league: league.value,
      team1: team1.value,
      team2: team2.value,
      time: time.value,
      stadium: stadium.value
    };

    matchs.push(match);
    localStorage.setItem("matchs", JSON.stringify(matchs));
    matchForm.reset();
    alert("Match ajouté !");
  });
}

// ---------- CLASSEMENT ----------
let classement = JSON.parse(localStorage.getItem("classement")) || [];

const classementForm = document.getElementById("classementForm");
if (classementForm) {
  classementForm.addEventListener("submit", e => {
    e.preventDefault();

    const team = {
      pos: pos.value,
      equipe: equipe.value,
      pts: pts.value,
      j: j.value,
      g: g.value,
      n: n.value,
      p: p.value,
      diff: diff.value
    };

    const index = classement.findIndex(t => t.equipe === team.equipe);
    if (index >= 0) classement[index] = team;
    else classement.push(team);

    localStorage.setItem("classement", JSON.stringify(classement));
    classementForm.reset();
    alert("Classement mis à jour !");
  });
}

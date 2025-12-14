const ADMIN_PASSWORD = "footactu123"; // À changer

function login() {
const input = document.getElementById("password").value;
if (input === ADMIN_PASSWORD) {
document.getElementById("adminPanel").style.display = "block";
alert("Accès autorisé");
} else {
alert("Mot de passe incorrect");
}
}

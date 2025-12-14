const ADMIN_PASSWORD = "footactu123"; // à changer

const loginForm = document.getElementById("loginForm");
const loginBox = document.getElementById("loginBox");
const adminContent = document.getElementById("adminContent");
const error = document.getElementById("error");
const logoutBtn = document.getElementById("logout");

function checkAuth() {
  if (localStorage.getItem("adminAuth") === "true") {
    loginBox.style.display = "none";
    adminContent.style.display = "block";
  }
}

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    if (password.value === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuth", "true");
      checkAuth();
    } else {
      error.textContent = "Mot de passe incorrect";
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("adminAuth");
    location.reload();
  });
}

checkAuth();

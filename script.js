// ----------------- INSCRIPTION -----------------
function handleSignup(event) {
    event.preventDefault();
    const name = document.querySelector('#signupForm input[name="name"]').value.trim();
    const email = document.querySelector('#signupForm input[name="email"]').value.trim();
    const password = document.querySelector('#signupForm input[name="password"]').value;
    if (!name || !email || !password) { alert("Remplissez tous les champs."); return; }
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    if (users.find(u => u.email === email)) { alert("Email déjà utilisé !"); return; }
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', email);
    window.location.href = "dashboard.html";
}

// ----------------- CONNEXION -----------------
function handleLogin(event) {
    event.preventDefault();
    const email = document.querySelector('#loginForm input[name="email"]').value.trim();
    const password = document.querySelector('#loginForm input[name="password"]').value;
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) { alert("Email ou mot de passe incorrect !"); return; }
    localStorage.setItem('currentUser', email);
    window.location.href = "dashboard.html";
}

// ----------------- AFFICHAGE NOM -----------------
function displayUserName() {
    const email = localStorage.getItem('currentUser');
    if (!email) return;
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const user = users.find(u => u.email === email);
    if (!user) return;
    document.querySelectorAll('#userName').forEach(el => el.innerText = user.name);
}

// ----------------- PROTECTION PAGE -----------------
function protectPage() {
    if (!localStorage.getItem('currentUser')) {
        alert("Veuillez vous connecter.");
        window.location.href = "index.html";
    } else { displayUserName(); loadDailyReadings(); }
}

// ----------------- DECONNEXION -----------------
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
}

// ----------------- LECTURES JOURNALIERES -----------------
function loadDailyReadings() {
    const readings = {
        theses: "Thèses du jour : La foi est lumière pour l'âme...",
        evangel: "Évangile : 'Je suis le chemin, la vérité et la vie.' - Jean 14:6",
        prayer: "Prière : Seigneur, éclaire nos cœurs pour te servir..."
    };
    const section = document.getElementById('readings-section');
    if (section) section.innerHTML = `
        <h2>Lectures Journalières</h2>
        <p><strong>Thèses :</strong> ${readings.theses}</p>
        <p><strong>Évangile :</strong> ${readings.evangel}</p>
        <p><strong>Prière :</strong> ${readings.prayer}</p>
    `;
}

// ----------------- EVENT LISTENERS -----------------
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);

    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
});

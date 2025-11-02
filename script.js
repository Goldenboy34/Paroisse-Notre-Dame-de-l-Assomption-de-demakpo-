/* ------------------------------------------
   Gestion de l'inscription
------------------------------------------- */
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.querySelector('#signupForm input[name="name"]').value.trim();
    const email = document.querySelector('#signupForm input[name="email"]').value.trim();
    const password = document.querySelector('#signupForm input[name="password"]').value;

    if (!name || !email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Stockage local simple
    const users = JSON.parse(localStorage.getItem('users') || "[]");

    // Vérifier si email existe déjà
    if (users.find(u => u.email === email)) {
        alert("Cet email est déjà utilisé !");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Inscription réussie !");
    localStorage.setItem('currentUser', email);
    window.location.href = "dashboard.html";
}

/* ------------------------------------------
   Gestion de la connexion
------------------------------------------- */
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.querySelector('#loginForm input[name="email"]').value.trim();
    const password = document.querySelector('#loginForm input[name="password"]').value;

    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Email ou mot de passe incorrect !");
        return;
    }

    localStorage.setItem('currentUser', email);
    alert(`Bienvenue ${user.name} !`);
    window.location.href = "dashboard.html";
}

/* ------------------------------------------
   Affichage du nom de l'utilisateur
------------------------------------------- */
function displayUserName() {
    const email = localStorage.getItem('currentUser');
    if (!email) return;

    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const user = users.find(u => u.email === email);
    if (!user) return;

    const nameElements = document.querySelectorAll('#userName');
    nameElements.forEach(el => el.innerText = user.name);
}

/* ------------------------------------------
   Gestion de la déconnexion
------------------------------------------- */
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html"; // page d'accueil
}

/* ------------------------------------------
   Lectures journalières dynamiques
------------------------------------------- */
function loadDailyReadings() {
    const readings = {
        "theses": "Thèses du jour : La foi est lumière pour l'âme...",
        "evangel": "Évangile du jour : 'Je suis le chemin, la vérité et la vie.' - Jean 14:6",
        "prayer": "Prière : Seigneur, éclaire nos cœurs pour te servir..."
    };

    if (!document.getElementById('readings-section')) return;

    const section = document.getElementById('readings-section');
    section.innerHTML = `
        <h2>Lectures Journalières</h2>
        <p><strong>Thèses :</strong> ${readings.theses}</p>
        <p><strong>Évangile :</strong> ${readings.evangel}</p>
        <p><strong>Prière :</strong> ${readings.prayer}</p>
    `;
}

/* ------------------------------------------
   Vérification d'accès aux pages protégées
------------------------------------------- */
function protectPage() {
    if (!localStorage.getItem('currentUser')) {
        alert("Veuillez vous connecter pour accéder à cette page.");
        window.location.href = "index.html";
    }
}

/* ------------------------------------------
   Initialisation des scripts sur toutes les pages
------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    displayUserName();
    loadDailyReadings();

    // Formulaires
    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);

    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
});

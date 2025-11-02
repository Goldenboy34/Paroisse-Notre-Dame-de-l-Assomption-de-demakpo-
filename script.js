function handleSignup(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const userName = document.querySelector('input[type=text]').value; // Récupère le nom
    localStorage.setItem('userName', userName); // Enregistre le nom dans le stockage local
    
    // Logique d'inscription ici (par exemple, appeler une API pour enregistrer l'utilisateur)
    
    window.location.href = 'dashboard.html'; // Redirige vers le tableau de bord
}

function handleLogin(event) {
    event.preventDefault();
    // Logique de connexion ici (remplace par un appel API si nécessaire)
    window.location.href = 'dashboard.html'; // Redirige vers le tableau de bord
}

function sendMassRequest(event) {
    event.preventDefault();
    // Logique d'envoi de la demande de messe ici (remplace par un appel API si nécessaire)
    alert("Demande de messe envoyée !");
}
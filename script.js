function handleSignup(event) {
    event.preventDefault();
    // Logique d'inscription ici (remplace par un appel API si nécessaire)
    localStorage.setItem('userName', document.querySelector('input[type=text]').value); // Enregistre le nom
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
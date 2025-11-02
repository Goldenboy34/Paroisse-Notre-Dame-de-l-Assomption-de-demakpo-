function handleSignup(event) {
  event.preventDefault();
  const userName = document.querySelector('#signupForm input[type=text]').value;
  localStorage.setItem('userName', userName);
  alert(`Bienvenue ${userName} !`);
  window.location.href = 'dashboard.html';
}

function handleLogin(event) {
  event.preventDefault();
  const storedName = localStorage.getItem('userName') || 'Utilisateur';
  alert(`Bienvenue ${storedName} !`);
  window.location.href = 'dashboard.html';
}

function sendMassRequest(event) {
  event.preventDefault();
  alert("Votre demande de messe a été envoyée !");
  document.getElementById('massRequestForm').reset();
}

function logout() {
  localStorage.removeItem('userName');
  alert("Vous êtes déconnecté !");
}

document.addEventListener('DOMContentLoaded', () => {
  const nameSpans = document.querySelectorAll('#userName');
  const storedName = localStorage.getItem('userName') || 'Invité';
  nameSpans.forEach(span => span.textContent = storedName);
});

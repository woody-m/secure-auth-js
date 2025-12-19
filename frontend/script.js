const API_URL = '/api/v1';

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('error');

  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem('token', data.token);
    window.location.href = 'profile.html';
  } catch (err) {
    errorDiv.textContent = err.message;
  }
}

async function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('error');

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    window.location.href = 'index.html';
  } catch (err) {
    errorDiv.textContent = err.message;
  }
}

async function loadProfile() {
  const token = localStorage.getItem('token');
  if (!token) return window.location.href = 'index.html';

  const res = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return logout();

  const data = await res.json();
  document.getElementById('profile').textContent =
    JSON.stringify(data.data, null, 2);
}

function logout() {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
}

if (window.location.pathname.includes('profile.html')) {
  loadProfile();
}


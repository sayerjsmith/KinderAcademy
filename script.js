function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (!username || !password) {
    document.getElementById("signup-error").textContent = "Please fill in both fields.";
    return;
  }

  if (localStorage.getItem(username)) {
    document.getElementById("signup-error").textContent = "Username already exists!";
    return;
  }

  localStorage.setItem(username, password);
  alert("Account created! You can now sign in.");
  window.location.href = "index.html";
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const savedPassword = localStorage.getItem(username);

  if (savedPassword === password) {
    alert("Welcome to Kinder Academy, " + username + "!");
    // You can redirect to dashboard.html or something here
  } else {
    document.getElementById("login-error").textContent = "Invalid username or password.";
  }
}

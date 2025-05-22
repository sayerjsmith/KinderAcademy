function createAccount() {
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (username && password) {
    if (localStorage.getItem(username)) {
      alert("Username already exists! Try logging in.");
      return;
    }
    localStorage.setItem(username, password);
    localStorage.setItem("lastLoggedInUser", username);
    alert("Account created successfully! 🎉");
    window.location.href = "index.html";
  } else {
    alert("Please fill out both fields.");
  }
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const savedPassword = localStorage.getItem(username);

  if (savedPassword === password) {
    localStorage.setItem("lastLoggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-error").textContent = "Invalid username or password.";
  }
}

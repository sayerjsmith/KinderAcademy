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
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-error").textContent = "Invalid username or password.";
  }
}
function createAccount() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    // Save username and password to localStorage
    localStorage.setItem(username, password);

    // Save who's logged in
    localStorage.setItem("lastLoggedInUser", username);

    alert("Account created! You can now sign in.");
    window.location.href = "index.html"; // or whatever your login page is
  } else {
    alert("Please enter a username and password.");
  }
}

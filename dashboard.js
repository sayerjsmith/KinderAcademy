window.onload = () => {
  const username = localStorage.getItem("lastLoggedInUser");
  const welcome = document.getElementById("welcome");
  if (username) {
    welcome.textContent = `Welcome to Kinder Academy, ${username}! 🎉`;
  } else {
    window.location.href = "index.html"; // no user? back to login
  }
};

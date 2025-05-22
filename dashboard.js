window.onload = () => {
  const username = localStorage.getItem("lastLoggedInUser");
  const welcome = document.getElementById("welcome");

  if (username) {
    welcome.textContent = `Welcome to Kinder Academy, ${username}! 🎉`;
  }
};

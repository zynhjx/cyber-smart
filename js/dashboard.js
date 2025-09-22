async function loadDashboard() {
  try {
    const response = await axios.get(
      "https://cyber-smartbackend-production-ffc3.up.railway.app/dashboard-data",
      { withCredentials: true }
    );

    if (response.data.loggedIn) {
      const welcomeDiv = document.createElement("div");
      welcomeDiv.textContent = `Welcome, ${response.data.username}`;
      welcomeDiv.style.margin = "1rem";
      welcomeDiv.style.fontWeight = "bold";
      document.body.prepend(welcomeDiv);
    } else {
      window.location.href = "./login.html";
    }
  } catch (err) {
    console.error("Session check failed:", err);
    window.location.href = "./login.html";
  }
}
window.addEventListener("DOMContentLoaded", loadDashboard);

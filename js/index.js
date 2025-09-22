
const video = document.querySelector("video#bg-video")
const preloader = document.querySelector(".preloader")

const btn = document.querySelector(".btn button")
const container = document.querySelector(".container")

const infi_castle = new Audio("./infinity-castle-opening.mp3")
infi_castle.preload = "auto";

const minecraft_mp3 = new Audio("./minecraft_click.mp3")
minecraft_mp3.preload = "auto";

video.addEventListener("canplaythrough", function() {
    preloader.style.display = "none"; 
});



btn.addEventListener("click", async () => {
  try {
    const response = await axios.get("cyber-smartbackend-production-ffc3.up.railway.app/dashboard-data", {
      withCredentials: true
    });

    if (response.data.loggedIn) {
      window.location.href = "./dashboard.html"
      alert("it exists")
    } else {
      window.location.href = "./login.html"
      alert("it doesnt")
    }
  } catch (err) {
    console.error(err);
    alert("catch doing it")
    window.location.href = "./login.html";
  }
});





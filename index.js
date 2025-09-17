
const video = document.querySelector("video#bg-video")
const preloader = document.querySelector(".preloader")

const btn = document.querySelector(".btn button")
const container = document.querySelector(".container")
const btns = document.querySelector(".btns")
const btns_fe = document.querySelectorAll(".btns button")
const back_btn = document.querySelector(".back-btn")

const infi_castle = new Audio("./infinity-castle-opening.mp3")
infi_castle.preload = "auto";

const minecraft_mp3 = new Audio("./minecraft_click.mp3")
minecraft_mp3.preload = "auto";

video.addEventListener("canplaythrough", function() {
    preloader.style.display = "none"; 
});

btn.addEventListener("click", function() {
    container.style.display = "none";
    btns.style.display = "flex";
    back_btn.style.display = "block";

    const audio = infi_castle.cloneNode();
    audio.play()
})

back_btn.addEventListener("click", function() {
    container.style.display = "flex";
    btns.style.display = "none";
    back_btn.style.display = "none";

    const audio = infi_castle.cloneNode();
    audio.play()
})

btns_fe.forEach(btn => {
    btn.addEventListener("mouseenter", function() {
        const audio = minecraft_mp3.cloneNode();
        audio.play();
    })
})

btns_fe.forEach(btn => {
    btn.addEventListener("click", function() {
        const audio = infi_castle.cloneNode();
        audio.play()
    })
})




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



// btn.addEventListener("click", function() {
//     if () {

//     }
// })





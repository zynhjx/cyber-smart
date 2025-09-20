
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



function btns_visibility() {
    container.style.display = "none";
    btns.style.display = "flex";
    back_btn.style.display = "block";
}

function welcome_page_visibility() {
    container.style.display = "flex";
    btns.style.display = "none";
    back_btn.style.display = "none";
}


video.addEventListener("canplaythrough", function() {
    preloader.style.display = "none"; 
});

if (sessionStorage.getItem("clicked") === "true") {
    btns_visibility();
}

btn.addEventListener("click", function() {
    btns_visibility();

    sessionStorage.setItem("clicked", "true")

})

back_btn.addEventListener("click", function() {
    welcome_page_visibility();

    sessionStorage.setItem("clicked", "false")
})

btns_fe.forEach(btn => {
    btn.addEventListener("mouseenter", function() {
        const audio = minecraft_mp3.cloneNode();
        audio.play();
    })
})




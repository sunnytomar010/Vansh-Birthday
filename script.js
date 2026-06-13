function nextPage(page) {
    document.querySelectorAll(".page")
        .forEach(p => p.classList.remove("active"));

    document.getElementById("page" + page)
        .classList.add("active");
}

const popup = document.getElementById("popup");

const images = [
    "",
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg"
];

const texts = [
    "",
    "🏏 Vansh hits sixes and wins hearts everywhere!",
    "🚲 Faster than the wind and cooler than everyone!",
    "🪁 May your dreams always fly as high as your kites!"
];

function showPopup(id) {
    document.getElementById("popupImg").src = images[id];
    document.getElementById("popupText").innerHTML = texts[id];
    popup.style.display = "flex";
}

document.getElementById("close").onclick = () => {
    popup.style.display = "none";
};

popup.onclick = (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
};
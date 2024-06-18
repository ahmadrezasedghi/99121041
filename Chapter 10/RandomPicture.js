var iconImg;
var pictures = ["CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO"];
var descriptions = [
    "Common Programming Error",
    "Error-Prevention Tip",
    "Good Programming Practice",
    "Look-and-Feel Observation",
    "Performance Tip",
    "Portability Tip",
    "Software Engineering Observation"
];

function pickImage() {
    var index = Math.floor(Math.random() * pictures.length); // Use pictures.length to determine the random index
    iconImg.setAttribute("src", pictures[index] + ".png");
    iconImg.setAttribute("alt", descriptions[index]);
}

function start() {
    iconImg = document.getElementById("iconImg");
    iconImg.addEventListener("click", pickImage, false);
}

window.addEventListener("load", start, false);

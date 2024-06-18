
var image1 = new Image();
image1.src = "heading1.png";
var image2 = new Image();
image2.src = "heading2.png";

function mouseOver(e) {
  if (e.target.getAttribute("id") == "heading") {
    e.target.setAttribute("src", image2.src);
  }

  if (e.target.tagName.toLowerCase() == "li") {
    e.target.style.color = "#" + e.target.id;
  }
}

function mouseOut(e) {
  if (e.target.getAttribute("id") == "heading") {
    e.target.setAttribute("src", image1.src);
  }

  if (e.target.tagName.toLowerCase() == "li") {
    e.target.innerHTML = "#" + e.target.id;
  }
}

document.addEventListener("mouseover", mouseOver, false);
document.addEventListener("mouseout", mouseOut, false);

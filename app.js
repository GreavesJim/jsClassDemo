function changeClass() {
  let tag = document.getElementById("1");
  tag.classList.add("red");
  tag.style.height = "300px";
}

function hideClass() {
  let tag = document.getElementById("2");
  if (!tag.classList.contains("hide")) {
    tag.classList.add("hide");
  } else {
    tag.classList.remove("hide");
  }
}

function blueThis(num) {
  let tag = document.getElementById(num);
  if (!tag.classList.contains("blue")) {
    tag.classList.add("blue");
  } else {
    tag.classList.remove("blue");
  }
}
function getWild() {
  let tag = document.getElementById("6");
  tag.classList.add("wild");
}

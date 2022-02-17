console.log("Hello World");
const switchBtn = document.getElementById("switchBtn");
let darkmode = true;
const switchColors = () => {
document.body.classList.toggle("lightMode");
if (darkmode) {
darkmode = false;
switchBtn.innerText = "Switch to dark mode";
} else {
darkmode = true;
switchBtn.innerText = "Switch to light mode";
}
}
switchBtn.addEventListener("click", switchColors);
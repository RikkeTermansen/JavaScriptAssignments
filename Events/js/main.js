let element = document.getElementById("myButton");
let bodytag = document.querySelector("body");
element.addEventListener("click", myFunction);

function myFunction() { 
    let rndCol = Math.floor(Math.random()*16777215).toString(16);
    bodytag.style.backgroundColor = "#" + rndCol
};



let section = document.getElementById("mySection");
let h1 = document.getElementById("myH1");
section.addEventListener("mouseover", newFunction);
section.addEventListener("mouseout", newNewFunction);

function newFunction() {
    h1.innerHTML = "Bøh!";
}

function newNewFunction() {
    h1.innerHTML = "Hold musen over mig"
}
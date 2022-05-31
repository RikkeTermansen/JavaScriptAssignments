var myText = document.getElementById("myText");
var myCheckbox = document.getElementById("myCheckbox");
var myRadios = document.querySelectorAll(".myRadios");
var mySubmit = document.getElementById("mySubmit");

const getData = (e) => {
    e.preventDefault();
    console.log(myText.value);
    myText.value = "";
    console.log(myCheckbox.name + ": " + myCheckbox.checked);
    myCheckbox.checked = false;
    myRadios.forEach(radio => {
        if(radio.checked) {
            console.log(radio.value);
            radio.checked = false;
        }
    })
}

mySubmit.addEventListener("click", getData);
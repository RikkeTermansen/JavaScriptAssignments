'use strict';

/* The blinking square */
let blinker = document.querySelector(".fa-square-full");
setInterval(function() {
    blinker.classList.toggle("blink")
}, 600);

// Variables
let userInputField = document.querySelector(".userInputField");
let userInput = [];

let ourTerminal = document.querySelector(".terminal");

let option = 0;
let collectPossible = false;
let route = [];

let storage;
let pokemon = ["Pikachu"];
let pokeballCount = 2;
let berryCount = 0;

const updatePage = (text) => {
    let paragraph = document.createElement("p"); 
    paragraph.innerText = text;
    ourTerminal.appendChild(paragraph);
}

const whatToDo = (userInput) => {
    userInput = userInput.toLowerCase();
    switch(userInput) {
        case "n":
        case "no":
        case "nope":
            updatePage("You typed in no");
            // hvis brugeren taster no
            break;
        case "y":
        case "yes":
            updatePage("You typed in yes");
            // hvis brugeren taster yes
        break;
        case "help":
            // hvis brugeren taster help
            updatePage("You typed in help");
            break;
        case "see storage":
        case "storage":
            // hvis brugeren taster storage
            updatePage("You typed in storage");
            pokemon.forEach(pokemon => {
                updatePage(pokemon);
            });
            updatePage(`${pokeballCount} pokeballs`);
            updatePage(`${berryCount} berries`);
            break;
        // Navigation
        case "forward":
            // hvis brugeren taster forward
            break;
        case "left":
            // hvis brugeren taster left
            break;
        case "right":
            // hvis brugeren taster right
            break;
        case "back":
            // hvis brugeren taster back
            break;
        default:
            // hvis brugeren taster noget, der ikke er angivet her
            updatePage("Sorry I don't understand");
    }
}

const getKey = (e) => {
    switch(e.key.toLowerCase()) {
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "h":
        case "i":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "o":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "u":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            userInput.push(e.key);
            userInputField.innerText = userInput.join('');
        break;
        case "backspace":
            userInput.pop();
            userInputField.innerText = userInput.join('');
        break;
        case "enter":
            userInput = userInput.join('');
            updatePage(userInput);
            whatToDo(userInput);
            userInput = [];
            userInputField.innerText = "";
        break;
        default:
            return false;
    }
}

window.addEventListener("keydown", getKey);
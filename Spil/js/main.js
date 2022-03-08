// Variables
let blinker; // blinkende firkant paa siden
let inputField // feltet vi skriver i
let userInput // input fra brugeren
let storage // vores storage
let option // hvor vi er
let route // hvilken rute vi har taget

// Functions
const whatToDo = (userInput) => {
    userInput = userInput.toLowerCase();
    switch(userInput) {
        case "n":
        case "no":
            console.log("You typed in no");    
            // hvis brugeren taster no
        break;
        case "y":
        case "yes":
            console.log("You typed in yes");   
            // hvis brugeren taster yes
        break;
        case "help":
            console.log("You typed in help");   
            // hvis brugeren taster help
        break;
        case "see storage":
        case "storage":
            console.log("You typed in storage");   
            // hvis brugeren taster storage
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
            console.log("Sorry I don't understand");
            // hvis brugeren taster noget der ikke er angivet her
    }
}
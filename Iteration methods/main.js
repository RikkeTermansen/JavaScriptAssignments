let randomList = ["target", "user", "element", "script", "day", "alphabet", "you"];
let firstLetter = randomList.map(element => {
    return element[0]
});
console.log(firstLetter)

let finalWord = firstLetter.reduce((accumulator, currentValue) => {
return accumulator + currentValue;
}); 
console.log(finalWord);
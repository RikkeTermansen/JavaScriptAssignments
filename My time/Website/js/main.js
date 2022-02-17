let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 5 && hour <= 8) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 8 && hour < 14 ) { 
  textHolder.innerHTML = "It is school time";
} else if (hour >= 15 && hour <= 16) { 
    textHolder.innerHTML = "Nap time";
} else if (hour == 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour >= 20 && hour <= 22) { 
    textHolder.innerHTML = "Snacktime";
} else {
  textHolder.innerHTML = "Goodnight";
}
let index = 0;
let myButton = document.getElementById("myButton");
let started = false;
let myTimeout;

const carousel = () => {
    if(started) {
        clearTimeout(myTimeout)
    } else {
        let slides = Array.from(document.getElementsByClassName("slide")); 
        slides.forEach(slide => {
        slide.style.display = "none"
        }); 
        index++; 
        if (index > slides.length) {
        index = 1;
        } 
        slides[index-1].style.display = "block"; 
        myTimeout = setTimeout(carousel, 1000); // Change image every 3 seconds
        }
    }
    const switchBoolean = () => {
        if(started) {
            started =false;
        }
        else {
            started = true;
        }
        carousel();
    }

        myButton.addEventListener("click", switchBoolean);


let slider = document.getElementById("slider-box");
let nextButton = document.getElementById("next_btn");
let prevButton = document.getElementById("prev_btn");
let progressText = document.getElementById("progress_bar");
let counter = 0;


progressText.innerText = counter+1 + " / " + slider.children.length;

prevButton.addEventListener("click", () => {
    counter--;
    if (slider.children.length == counter){
        // freecodecamp needs a button with the type "submit" to accept the challenge
        document.getElementById("submit").classList.remove("hidden");
    }
    else{
        slider.children[counter+1].classList.add("hidden");
        slider.children[counter].classList.remove("hidden");
        progressText.innerText = (counter + 1) + " / " + slider.children.length;
    }
});

nextButton.addEventListener("click", () => {
    counter++;
    if (slider.children.length == counter){
        // freecodecamp needs a button with the type "submit" to accept the challenge
        document.getElementById("submit").classList.remove("hidden");
    }
    else{
        slider.children[counter-1].classList.add("hidden");
        slider.children[counter].classList.remove("hidden");
        progressText.innerText = (counter + 1) + " / " + slider.children.length;
    }
});
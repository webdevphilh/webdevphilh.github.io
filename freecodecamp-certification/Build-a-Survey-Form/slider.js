

let slider = document.getElementById("slider-box");
let nextButton = document.getElementById("next_btn");
let prevButton = document.getElementById("prev_btn");
let progressText = document.getElementById("progress_bar");
let counter = 0;


progressText.innerText = counter+1 + " / " + slider.children.length;

prevButton.addEventListener("click", () => {

    if(counter >= 1){
        counter--;
    }

    if(counter+1 < slider.children.length){
        // freecodecamp needs a button with the type "submit" to accept the challenge, i would have liked to changed to "type=submit" instead
        nextButton.classList.remove("hidden");
        document.getElementById("submit").classList.add("hidden");
    }

    if(counter >= 0){
        slider.children[counter+1].classList.add("hidden");
        slider.children[counter].classList.remove("hidden");
        progressText.innerText = (counter + 1) + " / " + slider.children.length;
    }
});

nextButton.addEventListener("click", () => {

    if(counter < slider.children.length){    
        counter++;
    }

    if(slider.children.length == counter + 1){
        // freecodecamp needs a button with the type "submit" to accept the challenge, i would have liked to changed to "type=submit" instead
        nextButton.classList.add("hidden");
        document.getElementById("submit").classList.remove("hidden");
    }

    slider.children[counter-1].classList.add("hidden");
    slider.children[counter].classList.remove("hidden");
    progressText.innerText = (counter + 1) + " / " + slider.children.length;
});
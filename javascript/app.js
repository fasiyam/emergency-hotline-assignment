// Shared functions

function getInputAsNumber(id) {
    return parseInt(document.getElementById(id).innerText);
}

function setInnerText(id, value){
    return document.getElementById(id).innerText = value;
}



// Increment likes in the nav bar

const likeBtns = document.getElementsByClassName("like-btn");

for(const btn of likeBtns){
    btn.addEventListener("click", function(){
        let currentLikes = getInputAsNumber("like-count");

        currentLikes += 1;
        setInnerText("like-count", currentLikes);

    })
}


// Copy features




// Call features


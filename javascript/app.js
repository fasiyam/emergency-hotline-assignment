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

const copyBtns = document.getElementsByClassName("copy-number");
const emergencyNumbers = document.getElementsByClassName("number");

for(let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener("click", function(){
        let currentCopyCount = getInputAsNumber("copy-counts");
        let emNumber = emergencyNumbers[i].textContent;

        currentCopyCount += 1;

        navigator.clipboard.writeText(emNumber);
        alert(`Number Copied ${emNumber}`)

        setInnerText("copy-counts", currentCopyCount);
    })
}


// Call features

const callBtns = document.querySelectorAll(".call-btn");
const emergencyServices = document.getElementsByClassName("title");
const data = [];

for(let i = 0; i < callBtns.length; i++){
    callBtns[i].addEventListener("click", function(){
        let coins = getInputAsNumber("coins");
        const emergencyService = emergencyServices[i].textContent;
        const emergencyNumber = emergencyNumbers[i].textContent;

        if(coins >= 20) {
            coins -= 20;
            setInnerText("coins", coins);
            alert(`Calling ${emergencyService} ${emergencyNumber}`)
            const values = {
                serviceName: emergencyService,
                serviceNum: emergencyNumber
            }

            data.push(values);
        } else {
            alert("You don't have enough coins to call! You need at least 20 coins to call");
        }
    })
}




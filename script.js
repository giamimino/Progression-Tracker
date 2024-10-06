const increase = document.getElementById("increase");
let tier = 1;  // Make sure it's an integer
let realTier = document.getElementById("tier");
const perc = document.getElementById("perc");
const num = document.getElementById("num");
const lineBg = document.getElementById("line-bg");

let realNum = 100;
let addNum = 25;
let realPerc = 0;
let complatedNum = 0;
let formula = (tier * addNum) + (tier * realNum);  // Formula based on tier
let clickedNum = 0;
let limitNum = formula;  // Initial limit is based on the initial tier
let click = 100;

perc.textContent = realPerc + "%";
num.textContent = `${complatedNum}/${formula}`;

function updateProgress() {
    // Update the percentage
    realPerc = (complatedNum / limitNum) * 100;

    // Update the DOM elements
    perc.textContent = `${Math.min(realPerc, 100).toFixed(0)}%`;  // Cap the percentage at 100%
    num.textContent = `${Math.min(complatedNum, limitNum)}/${limitNum}`;
    

    // Update the progress bar width
    lineBg.classList.add("line-bg-anim");
    const lineBgAnim = document.querySelector(".line-bg-anim");
    lineBgAnim.style.width = `${Math.min(realPerc, 100).toFixed(0)}%`;
    increase.textContent = "+" + click;
}

function handleIncrease() {
    if (complatedNum < limitNum) {
        clickedNum += 100;  // Increment the clicked amount
        complatedNum += click;  // Increment the completed number
    }
    
    // Ensure completedNum doesn't exceed the limit
    if (complatedNum >= limitNum) {
        complatedNum = limitNum;
        tier += 1;  // Increase the tier
        click = Math.round(100 * (tier * 2 * (tier / 10)) + 100);
        realTier.textContent = tier;
        realNum = tier * 100;
        addNum = tier * 25;
        formula = (tier * addNum) + (tier * realNum);  // Recalculate the formula based on the new tier
        limitNum = formula;  // Update the new limit
        complatedNum = 0;
    }

    updateProgress();  // Update the progress after each click
}

// Function to increase the tier and recalculate the limit

// Example event listener to increase tier on some button click
// Event listener for increasing progress
increase.addEventListener("click", handleIncrease);

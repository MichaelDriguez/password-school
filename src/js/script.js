// ----------------------------------
// Password Strength Checker - Start
// ----------------------------------

document.addEventListener("DOMContentLoaded", function() {
  let inputField = document.getElementById("inputField");
  let outputDiv = document.getElementById("output");
  let bgElement = document.getElementById("mainBackground")

  bgElement.style.backgroundColor = "#DAD7CD";
  bgElement.style.marginTop = "12px";
  bgElement.style.marginBottom = "30px";

  // Event listener for input changes
  inputField.addEventListener("input", function() {
    let input = inputField.value;

    let strengthScore = 0
    let scoreString, suggestions = "This password needs: \n\n"

    let containsNumbers = false
    let containsSymbols = false
    let containsUppercase = false
    let containsLowercase = false

    // Password Length Evaluator
    if (input.length >= 20) {
      strengthScore += 2;
    } else if (input.length >= 12) {
      strengthScore++;
    } else if (input.length > 0) {
      strengthScore--;
      suggestions += "\tA length of at least 12 characters.\n";
    } else {
      outputDiv.textContent = "";
    }

    // Contains Numbers?
    if (/[0-9]/g.test(input)) {
      strengthScore++;
      containsNumbers = true;
    } else suggestions += "\tAt least one number.\n";

    // Contains Symbols?
    if (/[^a-zA-Z0-9]/g.test(input)) {
      strengthScore++;
      containsSymbols = true;
    } else suggestions += "\tAt least one symbol.\n";

    // Contains Uppercase Letters?
    if (/[A-Z]/g.test(input)) {
      strengthScore++;
      containsUppercase = true;
    } else suggestions += "\tAt least one uppercase letter.\n";

    // Contains Lowercase Letters?
    if (/[a-z]/g.test(input)) {
      strengthScore++;
      containsLowercase = true;
    } else suggestions += "\tAt least one lowercase letter.\n";

    if (strengthScore < 3) {
      // 2 or less
      scoreString = "Weak"
      bgElement.style.backgroundColor = "#e12729";
    } else if (strengthScore <= 4) {
      // 3 or 4
      scoreString = "Moderate"
      bgElement.style.backgroundColor = "#f8cc1b";
    } else if (strengthScore === 5) {
      // Exactly 5
      scoreString = "Strong"
      bgElement.style.backgroundColor = "#72b043";
    } else if (strengthScore >= 6) {
      // 6 or greater
      scoreString = "Very Strong"
      bgElement.style.backgroundColor = "#4e792e";
      suggestions = "";
    }

    if (containsNumbers && containsSymbols && containsUppercase &&
      containsLowercase && input.length >= 12) {
      suggestions = "";
    }

    outputDiv.textContent = "Password Score: " + scoreString + "\n"
      + "Password Length: " + input.length + "\n\n" + suggestions;

    outputDiv.style.whiteSpace = "pre-wrap";

    if (input.length === 0) {
      bgElement.style.backgroundColor = "#DAD7CD";
      outputDiv.textContent = "";
    }

  });
});

// ----------------------------------
// Password Strength Checker - End
// ----------------------------------

// Open and close sidebar
let isSidebarVisible = false // It's turned off by default.
function toggleSidebar() {
  if (!isSidebarVisible) {
    isSidebarVisible = true;
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").classList.add("main-background");
  } else if (isSidebarVisible) {
    isSidebarVisible = false;
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").classList.remove("main-background");
  }
}
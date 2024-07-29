document.addEventListener("DOMContentLoaded", function() {
  let inputField = document.getElementById("inputField");
  let outputDiv = document.getElementById("output");
  let bgElement = document.getElementById("mainBackground")

  bgElement.style.backgroundColor = "#ffffff";
  bgElement.style.marginTop = "20px";
  bgElement.style.marginBottom = "20px";

  // Event listener for input changes
  inputField.addEventListener("input", function() {
    let input = inputField.value;

    let strengthScore = 0
    let scoreString

    let isDefaultPassword = false
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
    } else {
      outputDiv.textContent = "";
    }

    // Contains Numbers?
    if (/[0-9]/g.test(input)) {
      strengthScore++;
      containsNumbers = true;
    }

    // Contains Symbols?
    if (/[^a-zA-Z0-9]/g.test(input)) {
      strengthScore++;
      containsSymbols = true;
    }

    // Contains Uppercase Letters?
    if (/[A-Z]/g.test(input)) {
      strengthScore++;
      containsUppercase = true;
    }

    // Contains Lowercase Letters?
    if (/[a-z]/g.test(input)) {
      strengthScore++;
      containsLowercase = true;
    }

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
      outputDiv.style.color = 'black';
    } else if (strengthScore >= 6) {
      // 6 or greater
      scoreString = "Very Strong"
      bgElement.style.backgroundColor = "#4e792e";
    }

    outputDiv.textContent = "\n" + "Password Score: " + scoreString + "\n\n"
    + "Password Length: " + input.length + "\n"
    + "Contains Numbers: " + containsNumbers + "\n"
    + "Contains Symbols: " + containsSymbols + "\n"
    + "Contains Uppercase Letters: " + containsUppercase + "\n"
    + "Contains Lowercase Letters: " + containsLowercase + "\n";

    outputDiv.style.whiteSpace = "pre-wrap";
    outputDiv.style.color = 'white';

    if (input.length === 0) {
      bgElement.style.backgroundColor = "#ffffff";
      outputDiv.textContent = "";
    }

  });
});

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("mySidebar").classList.add("main-background");
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("mySidebar").classList.remove("main-background");
  document.getElementById("myOverlay").style.display = "none";
}

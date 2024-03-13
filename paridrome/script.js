// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string
    const reversedStr = sanitizedStr.split('').reverse().join('');
    // Check if the original string equals the reversed string
    return sanitizedStr === reversedStr;
}

// Function to handle button click
function checkPalindrome() {
    const inputText = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");

    if (inputText === "") {
        alert("Please input a value");
    } else {
        if (isPalindrome(inputText)) {
            resultElement.textContent = inputText + " is a palindrome";
        } else {
            resultElement.textContent = inputText + " is not a palindrome";
        }
    }
}

// Event listener for button click
document.getElementById("check-btn").addEventListener("click", checkPalindrome);

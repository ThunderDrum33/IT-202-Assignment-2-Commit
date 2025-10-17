// Reverse String
function reverseString() {
  const input = document.getElementById("reverseInput").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("reverseResult").textContent = `Reversed String: ${reversed}`;
}

// Palindrome Check
function checkPalindrome() {
  const input = document.getElementById("stringInput").value;
  const cleaned = input.replace(/\s+/g, ''); // Remove spaces
  const reversed = cleaned.split("").reverse().join("");
  const result = cleaned === reversed;

  document.getElementById("palindromeResult").textContent = result
    ? "It's a palindrome!"
    : "Not a palindrome.";
}

// Tip Calculator
function calculateTotal() {
  const subtotal = parseFloat(document.getElementById("subtotal").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  if (isNaN(subtotal) || isNaN(tipPercent)) {
    document.getElementById("totalResult").textContent = "Please enter valid numbers. Letters & Symbols don't count";
    return;
  }
  const tipAmount = subtotal * (tipPercent / 100);
  const total = subtotal + tipAmount;
  document.getElementById("totalResult").textContent = `Total to pay: $${total.toFixed(2)}`;
}

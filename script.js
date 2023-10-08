// Get the display element
const display = document.querySelector("#display");
// Get all the buttons
const buttons = document.querySelectorAll("button");

// Add event listener to each button
buttons.forEach((item) => {
  item.onclick = () => {
    // Get the id of the button
    const { id } = item;
    // Get the current text in the display
    let { innerText } = display;

    // Handle different button clicks
    if (id === "clear") {
      // Clear the display
      innerText = "";
    } else if (id === "backspace") {
      // Remove the last character from the display
      innerText = innerText.slice(0, -1);
    } else if (id === "equal") {
      if (innerText !== "") {
        // Evaluate the expression in the display and update the display with the result
        innerText = eval(innerText)
      } else {
        // Display "Empty!" for 2 seconds and then clear the display
        innerText = "Empty!";
        setTimeout(() => {
          innerText = "";
        }, 2000);
      }
    } else {
      innerText += id;
    }

    // Update the display with the new text
    display.innerText = innerText;
  };
});

// Get the theme toggle button, calculator element, and toggle icon
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDarkMode = true;

// Add event listener to the theme toggle button
themeToggleBtn.onclick = () => {
  // Toggle the "dark" class on the calculator element
  calculator.classList.toggle("dark");
  // Toggle the "active" class on the theme toggle button
  themeToggleBtn.classList.toggle("active");
  // Toggle the dark mode flag
  isDarkMode = !isDarkMode;
};

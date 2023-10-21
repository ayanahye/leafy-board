document.addEventListener("DOMContentLoaded", function() {
    // Get the edit button element
    var editButton = document.getElementById("edit");

    // Add a click event listener to the edit button
    editButton.addEventListener("click", function() {
        // Prompt the user to enter a color
        var chosenColor = prompt("Choose a color (e.g., red, #00ff00):");

        // Check if the user entered a color
        if (chosenColor !== null && chosenColor !== "") {
            // Set the background color of the frame
            document.querySelector(".frame").style.backgroundColor = chosenColor;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the edit button element
    var editButton = document.getElementById("edit");

    // Get the color picker input element
    var colorPicker = document.getElementById("colorPicker");

    // Add a click event listener to the edit button
    editButton.addEventListener("click", function() {
        // Trigger the color picker input
        colorPicker.click();
    });

    // Add an input event listener to the color picker
    colorPicker.addEventListener("input", function(event) {
        // Get the selected color
        var chosenColor = event.target.value;

        // Set the background color of the frame
        document.querySelector(".color-overlay").style.backgroundColor = chosenColor;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add");
    const leafText = document.getElementById("leafText");
    const leafImage = document.querySelector(".image-leaf");

    addButton.addEventListener("click", function () {
        // Get the dimensions of the .textwleaf container
        const containerWidth = document.querySelector(".textwleaf").offsetWidth;
        const containerHeight = document.querySelector(".textwleaf").offsetHeight;

        // Generate random left and top values within the container
        const randomLeft = Math.floor(Math.random() * (containerWidth - 200)); // 200 is the width of the elements
        const randomTop = Math.floor(Math.random() * (containerHeight - 200)); // 200 is the height of the elements

        // Update the left and top properties of the elements
        leafText.style.left = randomLeft + "px";
        leafText.style.top = randomTop + "px";
        leafText.style.display = "block"; // Show the leaf text

        leafImage.style.left = randomLeft + "px";
        leafImage.style.top = randomTop + "px";
    });
});

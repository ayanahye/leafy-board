// // Make the DIV element draggable:
// dragElement(document.getElementById("mydiv"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// // Get the "add" button element by its id
// const addButton = document.getElementById("add");

// // Add a click event listener to the "add" button
// addButton.addEventListener("click", function() {
//     // Get the element you want to duplicate by its id
//     const originalDiv = document.getElementById("mydiv");

//     // Clone the element
//     const clonedDiv = originalDiv.cloneNode(true);

//     // Generate a new ID for the cloned element (optional)
//     const newId = "mydiv" + Date.now();
//     clonedDiv.id = newId;

//     // Modify any classes or other attributes if needed
//     // For example, if you want to add a class to the cloned div:
//     clonedDiv.classList.add("new-class");

//     // Append the cloned element to the parent
//     originalDiv.parentNode.appendChild(clonedDiv);
// });

// test.js

document.addEventListener("DOMContentLoaded", function() {
  // Make the initial box draggable
  makeDraggable(document.getElementById("mydiv"));

  var addButton = document.getElementById("add");
  var frame = document.querySelector(".frame");

  addButton.addEventListener("click", function() {
      // Create a new container div
      var containerDiv = document.createElement("div");
      containerDiv.classList.add("draggable"); // Add a class for styling and identification
      containerDiv.style.position = 'absolute';  // Set position to absolute for free positioning

      // Generate non-overlapping random positions
      var position = getRandomPosition();
      while (isOverlapping(position)) {
          position = getRandomPosition();
      }

      containerDiv.style.top = position.top + 'px';
      containerDiv.style.left = position.left + 'px';

      // Create a new text box
      var newTextBox = document.createElement("p");
      newTextBox.textContent = "New Text Box";

      // Append the text box to the container div
      containerDiv.appendChild(newTextBox);

      // Append the container div to the content div
      frame.appendChild(containerDiv);

      // Make the new box draggable
      makeDraggable(containerDiv);
  });

  // Helper function to make an element draggable
  function makeDraggable(element) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      element.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          element.style.top = (element.offsetTop - pos2) + "px";
          element.style.left = (element.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
      }
  }

// Get the "add" button element by its id
const addButton = document.getElementById("add");

// Add a click event listener to the "add" button
addButton.addEventListener("click", function() {
    // Get the element you want to duplicate by its id
    const originalDiv = document.getElementById("mydiv");

    // Clone the element
    const clonedDiv = originalDiv.cloneNode(true);

    // Generate a new ID for the cloned element (optional)
    const newId = "mydiv" + Date.now();
    clonedDiv.id = newId;

    // Modify any classes or other attributes if needed
    // For example, if you want to add a class to the cloned div:
    clonedDiv.classList.add("new-class");

    // Append the cloned element to the parent
    originalDiv.parentNode.appendChild(clonedDiv);
});

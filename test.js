// // Make the DIV element draggable:
// dragElement(document.getElementById("mydiv"));

// const addButton = document.getElementById("add");

// addButton.addEventListener("click", function() {
//     const originalDiv = document.getElementById("mydiv");

//     // Clone the element
//     const clonedDiv = originalDiv.cloneNode(true);

//     // Generate a new ID for the cloned element
//     const newId = "mydiv" + Date.now();
//     clonedDiv.id = newId;


//     // Modify any classes or other attributes if needed
//     clonedDiv.classList.add("new-class");

//     // Append the cloned element to the parent
//     originalDiv.parentNode.appendChild(clonedDiv);

//     // Include CSS rules to match the IDs and classes
//     const style = document.createElement("style");
//     style.innerHTML = `
//         #${newId} {
//             /* Add your styles here */
//         }
//         #${newId} .new-class {
//             /* Add your styles for the new class here */
//         }
//     `;

//     // Append the CSS rules to the head of the document
//     document.head.appendChild(style);
//     dragElement(document.getElementById(clonedDiv.id));
// });

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


// test.js

document.addEventListener("DOMContentLoaded", function() {

  makeDraggable(document.getElementById("mydiv"));

  var addButton = document.getElementById("add");
  var frame = document.querySelector(".frame");

  addButton.addEventListener("click", function() {

    var containerDiv = document.createElement("div");
    containerDiv.classList.add("draggable"); 
    containerDiv.style.position = 'absolute';  


    var position = getRandomPosition();
    while (isOverlapping(position)) {
        position = getRandomPosition();
    }

    containerDiv.style.top = position.top + 'px';
    containerDiv.style.left = position.left + 'px';


    var contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");


    var title = document.createElement("h2");
    title.textContent = "Button Title";

    var description = document.createElement("p");
    description.textContent = "This is a custom button with a nice background and description.";

  
    contentContainer.appendChild(title);
    contentContainer.appendChild(description);

 
    containerDiv.appendChild(contentContainer);


    frame.appendChild(containerDiv);


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

  function getRandomPosition() {
      return {
          top: Math.floor(Math.random() * frame.clientHeight),
          left: Math.floor(Math.random() * frame.clientWidth)
      };
  }

  function isOverlapping(position) {
      var leaves = frame.querySelectorAll('.draggable');

      for (var i = 0; i < leaves.length; i++) {
          var rect = leaves[i].getBoundingClientRect();

          if (
              position.top >= rect.top &&
              position.top <= rect.bottom &&
              position.left >= rect.left &&
              position.left <= rect.right
          ) {
              return true;  // Overlapping
          }
      }

      return false;  // Not overlapping
  }
});

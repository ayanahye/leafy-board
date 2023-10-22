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

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("material-icons", "delete-button");
    deleteButton.textContent = "cancel";
    deleteButton.addEventListener("click", function() {
        frame.removeChild(containerDiv);
    });

    var title = document.createElement("h2");
    title.textContent = "Button Title";

    var description = document.createElement("p");
    description.textContent = "This is a custom button with a nice background and description.";

    contentContainer.appendChild(deleteButton);
    contentContainer.appendChild(title);
    contentContainer.appendChild(description);

    containerDiv.appendChild(contentContainer);

    frame.appendChild(containerDiv);

    makeDraggable(containerDiv);
});



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
              return true;
          }
      }

      return false;
  }
});

const deleteButton = document.getElementById('delete');
        
// Get the parent div to be deleted
const mydiv = document.getElementById('mydiv');

// Function to delete the mydiv element
function deleteMyDiv() {
    mydiv.remove();
}

// Add a click event listener to the delete button
deleteButton.addEventListener('click', deleteMyDiv);
document.addEventListener("DOMContentLoaded", function() {
    makeDraggable(document.getElementById("mydiv"));

    var addButton = document.getElementById("add");
    var frame = document.querySelector(".frame");

    addButton.addEventListener("click", function() {
        var title = prompt("Enter the title for the new element:");
        var description = prompt("Enter the description for the new element:");

        if (title === null || title.trim() === '' || description === null || description.trim() === '') {
            return;
        }

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("material-icons", "delete-button");
        deleteButton.textContent = "cancel";
        deleteButton.style.position = "relative"
        deleteButton.style.margin = 0;

        var containerDiv = document.createElement("div");
        containerDiv.classList.add("draggable");
        containerDiv.style.position = 'absolute';
        containerDiv.style.background = "rgb(31, 60, 127, 0.5)";

        
        containerDiv.style.display = "flex";
        containerDiv.style.padding = "10px 0 0 10px"

        var position = getRandomPosition();
        while (isOverlapping(position)) {
            position = getRandomPosition();
        }

        containerDiv.style.top = position.top + 'px';
        containerDiv.style.left = position.left + 'px';

        var contentContainer = document.createElement("div");
        contentContainer.classList.add("content-container");
        
        deleteButton.addEventListener("click", function() {
            frame.removeChild(containerDiv);
        });



        var titleElement = document.createElement("h2");
        titleElement.textContent = title;

        titleElement.style.fontSize = "28px"
        titleElement.style.color = "white";

        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;

        descriptionElement.style.fontSize = "20px"
        descriptionElement.style.color = "white";

        contentContainer.appendChild(titleElement);
        contentContainer.appendChild(descriptionElement);
        contentContainer.appendChild(deleteButton); // Add the delete button to the content container

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
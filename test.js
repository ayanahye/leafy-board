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

        var titleElement = document.createElement("h2");
        titleElement.textContent = title;

        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;

        contentContainer.appendChild(titleElement);
        contentContainer.appendChild(descriptionElement);

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

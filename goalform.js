const titleInput = document.getElementById('titleInput');
const goalInput = document.getElementById('goalInput');
const mydivheader = document.getElementById('mydivheader');
const goalDiv = document.getElementById('goalDiv');

titleInput.addEventListener('input', function () {
    mydivheader.textContent = titleInput.value;
});

goalInput.addEventListener('input', function () {
    goalDiv.textContent = goalInput.value;
});
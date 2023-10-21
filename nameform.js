
const nameForm = document.getElementById("nameForm");
const output = document.getElementById("output");

nameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    output.textContent = `${name}'s Leafy Board:`;
    document.getElementById("link").click();
});

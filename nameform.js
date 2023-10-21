// Function to get the value of a URL parameter by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the 'name' parameter from the URL
const nameParam = getParameterByName('name');

if (nameParam) {
    // Set the header text to the provided name
    const outputElement = document.getElementById("output");
    outputElement.textContent = `${nameParam}'s Leafy Board:`;
}

document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("name").value;
    // Redirect to home.html with the name parameter in the URL
    window.location.href = `home.html?name=${name}`;
});
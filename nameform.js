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

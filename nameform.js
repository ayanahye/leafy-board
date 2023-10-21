document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    // Redirect to home.html with the name parameter in the URL
    window.location.href = `home.html?name=${name}`;
});

document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("name").value;
    // Store the name in localStorage
    localStorage.setItem("userName", name);
    
    // Redirect to home.html
    window.location.href = "home.html";
});

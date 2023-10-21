
<<<<<<< HEAD
add.addEventListener("click", function() {
    add.textContent = "add"
})


let background = document.getElementById("change background");

<!DOCTYPE html>
<html>
<head>
    <title>Change Background Color</title>
</head>
<body>
    <button id="changeColorButton">Change Color</button>

    <script src="your_script.js"></script>
</body>
</html>

function newcolour(){
    var symbols,colour;
    symbols = "0123456789ABCDEF"
    colour = "#";
    for(var i = 0; i<6; i++){
        colour = colour + symbols[Math.floor(Math.random() * 16)];
    
    }
    document.content.background = colour;
}

var changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", newcolour);


const nameForm = document.getElementById("nameForm");
const output = document.getElementById("output");

nameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    output.textContent = `${name}'s Leafy Board:`;
});





>>>>>>> 25f3fc5b4e2e1b9b211549502d5cc79b223e870c
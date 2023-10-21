let add = document.getElementById("add");

add.addEventListener("click", function() {
    add.textContent = "add"
})


let background = document.getElementById("change background");

function newcolour(){
    var symbols,colour;
    symbols = "0123456789ABCDEF"
    colour = "#";
    for(var i = 0; i<6; i++){
        colour = colour + symbols[Math.floor(Math.random() * 16)];
    
    }
    document.content.background = colour;
}
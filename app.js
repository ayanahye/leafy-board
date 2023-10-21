let add = document.getElementById("add");
const textonleaf = document.querySelector('.textonleaf');

textonleaf.setAttribute('draggable', 'true');

textonleaf.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData('text', ev.target.id);
});

add.addEventListener('dragover', function (ev) {
    ev.preventDefault();
});

add.addEventListener('drop', function (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
});
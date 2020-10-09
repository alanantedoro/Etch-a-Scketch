
let color = '#000000'
let container = document.getElementById('container')
let size = 16;

//Event for Reset
let resetButton = document.getElementById('reset');
reset.addEventListener('click', (e) => {
    location.reload();
});

//Pick a new color
let newColor = document.getElementById('colorSelection');
newColor.addEventListener('input', (e) => {
    color = e.target.value;
});

function newGrid () {
    document.getElementById('container').innerHTML='';
}

//Resize
let resize = document.getElementById('newSize');
resize.addEventListener('input', (e) => {
    newGrid();
    size = e.target.value;
    init(size, size)
})

init(size, size);

//Main generation fx
function init(width, height){
    container.style.gridTemplateColumns = `repeat(${height}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${width}, 1fr)`;

    for( i = 0; i < (width * height); i++) {
        const cell = document.createElement('div');
        cell.style.borderStyle = "solid"
        cell.style.borderWidth = "1px"
        cell.style.borderColor = "grey"
        cell.addEventListener("mousemove", (e) => {
            e.target.style.backgroundColor = color;
            e.target.style.opacity = `${Number(cell.style.opacity) + 0.1}`;
        });

        container.appendChild(cell).className = 'grid-cell';
    }

}


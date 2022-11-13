var input = document.getElementById('input');
var width = document.getElementById('width');
var height = document.getElementById('height');
var border = document.getElementById('border');

var colorSpan = document.getElementById('colorSpan');
var widthSpan = document.getElementById('widthSpan');
var heightSpan = document.getElementById('heightSpan');

var box = document.getElementById('box');

var borderForm = document.getElementById('borderForm');

input.oninput = () => {
    box.style.backgroundColor = input.value;
    input.style = `color: ${input.value}`;
    colorSpan.textContent = input.value;
}

width.oninput = () => {
    box.style.width = `${width.value}px`;
    widthSpan.textContent = width.value + 'px';
}

height.oninput = () => {
    box.style.height = `${height.value}px`;
    heightSpan.textContent = height.value + 'px';
}

var borderRange = document.createElement('input');
var borderSpan = document.createElement('span');

function chbox() {

    if (border.checked) {
        borderRange.setAttribute('type', 'range')
        borderRange.setAttribute('min', '0')
        borderRange.setAttribute('max', '10')
        borderRange.setAttribute('value', '0')
        borderForm.appendChild(borderRange);

        borderSpan.innerHTML = borderRange.value + 'px'
        borderForm.appendChild(borderSpan);

        borderRange.oninput = () => {
            box.style.border = `${borderRange.value}px solid black`;
            borderSpan.innerHTML = borderRange.value + 'px'
        }
    }
    else {
        borderForm.removeChild(borderRange);
        borderForm.removeChild(borderSpan);
    }
}

var radiusRange = document.createElement('input');
var radiusSpan = document.createElement('span');

function radbox() {

    if (radius.checked) {
        radiusRange.setAttribute('type', 'range')
        radiusRange.setAttribute('min', '0')
        radiusRange.setAttribute('max', '50')
        radiusRange.setAttribute('value', '0')
        radiusForm.appendChild(radiusRange);

        radiusSpan.innerHTML = radiusRange.value + '%'
        radiusForm.appendChild(radiusSpan);

        radiusRange.oninput = () => {
            box.style.borderRadius = `${radiusRange.value}%`;
            radiusSpan.innerHTML = radiusRange.value + '%'
        }
    }
    else {
        radiusForm.removeChild(radiusRange);
        radiusForm.removeChild(radiusSpan);
    }
}

btn.onclick = () => {
    code.innerHTML = `
    width: ${width.value}px; <br>
    height: ${height.value}px; <br>
    background-color: ${input.value}; <br>
    border: ${borderRange.value}px solid black; <br>
    border-radius: ${radiusRange.value}%;
    `
}
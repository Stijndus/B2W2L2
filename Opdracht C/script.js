// Stijn Dusseldorp
// Software Developer 2020

var tables = [2,4,6,8]
var container = document.getElementById("outputContainer")

for(i=1;i<=10;i++){
    let answer = tables[0] * i;
    container.innerHTML += tables[0] + " x " + i + " = " + answer + "<br>"
}

for(i=1;i<=10;i++){
    let answer = tables[1] * i;
    container.innerHTML += tables[1] + " x " + i + " = " + answer + "<br>"
}

for(i=1;i<=10;i++){
    let answer = tables[2] * i;
    container.innerHTML += tables[2] + " x " + i + " = " + answer + "<br>"
}

for(i=1;i<=10;i++){
    let answer = tables[3] * i;
    container.innerHTML += tables[3] + " x " + i + " = " + answer + "<br>"
}
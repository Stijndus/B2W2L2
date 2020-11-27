// Stijn Dusseldorp
// Software Developer 2020

var tables = [2,4,6,8]
var container = document.getElementById('outputContainer')

for(x=0;x<tables.length;x++){
    var tableHead = document.createElement('h2');
    tableHead.innerText = ('Dit is de kop van de tafel ' + tables[x]);
    container.appendChild(tableHead);
    for(i=1;i<=10;i++){
        let answer = tables[x] * i;
        container.innerHTML += tables[x] + ' x ' + i + ' = ' + answer + '<br>'
    }
}

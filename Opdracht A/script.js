// Stijn Dusseldorp
// Software Developer

const days = ['Maandag', 'Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag','Zondag'];


// De code voor heel de week
for(i = 0; i < days.length; i++){
    document.getElementById('week').innerHTML += days[i] + " ";
}

// De code voor de werkdagen
for(i = 0; i < 5; i++){
    document.getElementById('werkdagen').innerHTML += days[i] + " ";
}

// De code voor het weekend
for(i = 5; i < 7; i++){
    document.getElementById('weekenddagen').innerHTML += days[i] + " ";
}

// De code voor de omgekeerde week
for(i = 6; i >=0 ; i--){
    document.getElementById('reverse').innerHTML += days[i] + " ";
}

// De code voor de omgekeerde werkweek
for(i =4; i >= 0; i--){
    document.getElementById('werkReverse').innerHTML += days[i] + " ";
}

//De code voor het omgekeerde weekend
for(i = 6; i >= 5; i--){
    document.getElementById('weekendReverse').innerHTML += days[i] + " ";
}
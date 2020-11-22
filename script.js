// Stijn Dusseldorp
// Software Developer

const days = ['Maandag', 'Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag','Zondag.'];


for(i = 0; i < days.length; i++){
    document.getElementById('week') .innerHTML += days[i] + " ";
}
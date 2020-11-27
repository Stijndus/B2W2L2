// Stijn Dusseldorp
// Software Developer 2020

var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(array1, array2){
    for(i=0;i<10;i++){
        let result = array1[i] + array2[i];
        document.getElementById("optel").innerHTML += array1[i] + " + " + array2[i] + " = " + result + "<br>";
    }
}

function aftrekken(array1, array2){
    for(i=0;i<10;i++){
        let result = array1[i] - array2[i];
        document.getElementById("aftrek").innerHTML += array1[i] + " - " + array2[i] + " = " + result + "<br>";
    }
}

function vermenigvuldigen(array1, array2){
    for(i=0;i<10;i++){
        let result = array1[i] * array2[i];
        document.getElementById("vermenigvuldigen").innerHTML += array1[i] + " x " + array2[i] + " = " + result + "<br>";
    }
}

function delen(array1, array2){
    for(i=0;i<10;i++){
        let result = array1[i] / array2[i];
        document.getElementById("delen").innerHTML += array1[i] + " / " + array2[i] + " = " + result + "<br>";
    }
}

optellen(arrayEen, arrayTwee);
aftrekken(arrayTwee, arrayEen);
vermenigvuldigen(arrayEen, arrayTwee);
delen(arrayTwee, arrayEen);
 
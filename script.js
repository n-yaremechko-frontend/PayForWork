let add1 = document.getElementById("addnew1");
let add2 = document.getElementById("addnew2");
let add3 = document.getElementById("addnew3");
let add4 = document.getElementById("addnew4");
let add5 = document.getElementById("addnew5");
let add6 = document.getElementById("addnew6");


let col2 = document.getElementById("second");
let col3 = document.getElementById("third");
let col4 = document.getElementById("four");
let col5 = document.getElementById("five");
let col6 = document.getElementById("six");
let col7 = document.getElementById("seven");


add1.onclick = function(){
    col2.classList.toggle("hide");
};
add2.onclick = function(){
    col3.classList.toggle("hide");
};
add3.onclick = function(){
    col4.classList.toggle("hide");
};
add4.onclick = function(){
    col5.classList.toggle("hide");
};
add5.onclick = function(){
    col6.classList.toggle("hide");
};
add6.onclick = function(){
    col7.classList.toggle("hide");
};



////////// Спрощення getElementById //////////

let getID = function(elem){
    return document.getElementById(elem);
}



intervalId = window.setInterval(function () { 
    
    
    let much1 = getID("much1");
    let much2 = getID("much2");
    let much3 = getID("much3");
    let much4 = getID("much4");
    let much5 = getID("much5");
    let much6 = getID("much6");


    let much11 = parseFloat(much1.value);
    let much12 = parseFloat(much2.value);
    let much13 = parseFloat(much3.value);
    let much14 = parseFloat(much4.value);
    let much15 = parseFloat(much5.value);
    let much16 = parseFloat(much6.value);


    let For1 = getID("For1");
    let For2 = getID("For2");
    let For3 = getID("For3");
    let For4 = getID("For4");
    let For5 = getID("For5");
    let For6 = getID("For6");


    
    let For11 = parseFloat(For1.value);
    let For12 = parseFloat(For2.value);
    let For13 = parseFloat(For3.value);
    let For14 = parseFloat(For4.value); 
    let For15 = parseFloat(For5.value);
    let For16 = parseFloat(For6.value);


    let Sum11 = much11 * For11;
    let Sum12 = much12 * For12;
    let Sum13 = much13 * For13;
    let Sum14 = much14 * For14;
    let Sum15 = much15 * For15;
    let Sum16 = much16 * For16;
    

    getID("Sum1").innerHTML = Sum11 + " ₴";
    getID("Sum2").innerHTML = Sum12 + " ₴";
    getID("Sum3").innerHTML = Sum13 + " ₴";
    getID("Sum4").innerHTML = Sum14 + " ₴";
    getID("Sum5").innerHTML = Sum15 + " ₴";
    getID("Sum6").innerHTML = Sum16 + " ₴";

    // Масив всіх результатів
    let SumArray = [Sum11, Sum12, Sum13, Sum14, Sum15, Sum16,];

    // для легшого доступу
    let SumOfOne = [getID("Sum1"), getID("Sum2"), getID("Sum3"), getID("Sum4"), getID("Sum5"), getID("Sum6") ];


    /////// Пусте поле замість NaN ///////////
    for (let b = 0; b < SumArray.length; b++) {
        if(isNaN(SumArray[b])){
            SumOfOne[b].innerHTML = '';
        }
    }
    ///////// РАХУЄ ЗАГАЛЬНУ СУМУ///////////
    let a = 0;
    for (let i = 0; i < SumArray.length; i++) {
        if(isNaN(SumArray[i])){
            i+1
        }
        else{
            a += SumArray[i]
        }  
      }
      
    getID("FullSum").innerHTML = a + " ₴";



}, 1000);


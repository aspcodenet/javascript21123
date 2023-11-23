console.log('adsdsa')

// STATUS FRÅGOR sen senast?
//vad är en funktion
//varför skriver vi funktioner
//skillnad metod/funktion : metodär en funktion i en klass
//hur deklarera man en funktion? Minst 4 olika sätt...of course!
// function declaration

function calculateVatOld(price, catepory="bil"){
    if(catepory === "bil"){
        return price + 2
    }
    if(catepory === "book"){
        return price * 0.06     
    }
    if(catepory === "mat"){
        return price * 0.12     
    }
    return price * 0.25 
}

// console.log(typeof calculateVatOld)
// calculateVatOld.stefansAge = 51
// console.log(calculateVatOld.name)
// console.log(calculateVatOld.stefansAge)


// var -> let


// sidospår - javacript is weird! typeof = function men den har statiska properties 
//              new:ar vi en funktion får vi ett "objekt"

// function expression
// BEST PRACTICE
// Skillnad mot vanlig function declaration? scope och detta är bättre i felsökning osv
const calculateVat = function (price, catepory="bil"){
    if(catepory === "bil"){
        return price + 2
    }
    if(catepory === "book"){
        return price * 0.06     
    }
    if(catepory === "mat"){
        return price * 0.12     
    }
    return price * 0.25 
}


// arrow function
// också best practice
// Skillnad mot function expression? egentligen inte syntax utan det blir mer skillnad sen i OOP (this)
const calculateVat3 = (price,catepory="bil") => {
    if(catepory === "bil"){
        return price + 2
    }
    if(catepory === "book"){
        return price * 0.06     
    }
    if(catepory === "mat"){
        return price * 0.12     
    }
    return price * 0.25 
}

function summera2(x,y){ // function declaration
    return x + y
}
const summera = function(x,y){ // function expression
    return x + y
}
const summera2 = (x,y) => x + y





let vat12 = calculateVat3(322)
console.log(vat12)

let vat11 = calculateVat(300)

let price1 = 100
let vat1 = calculateVat(price1, "bil")
console.log(vat1)

let price2 = 120
let vat2 = calculateVat(price2, "mat")
console.log(vat2)



// arrow function
// vi stannar är just nu hehe...
// BEST PRACTICE = function expression + arrow functions


//Arrayer - alla jobbiga metoder!
let ourCustomers = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]




// MÅL: 11:15-12:00 EGEN TID MED HANDLEDNING


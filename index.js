// Code your solution in this file!
//let Drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])

function returnFirstTwoDrivers (Drivers){
    return Drivers.slice(0,2)
}
function returnLastTwoDrivers(Drivers){
    return Drivers.slice(2,5)
}
let selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

function createFareMultiplier(multiplier){
    return fare => fare * multiplier 
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, funct){
    return funct(arrayOfDrivers)
}
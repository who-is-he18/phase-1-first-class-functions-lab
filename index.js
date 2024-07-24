// Code your solution in this file!
const driversArray =['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0, 2)
}
const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(integer){
    return function multiplyFare(fare){
        return fare*integer
  }
}
function fareDoubler(fare){
    return fare*2
}
function fareTripler(fare){
    return fare*3
}
function selectDifferentDrivers(driversArray,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(driversArray)
}



// Code your solution in this file!
const names = ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers = function() {
    return names.slice(0, 2)
}
const returnLastTwoDrivers = function() {
    return names.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const number = (num1, num2) => {
//     return num1 * num2
// }
const createFareMultiplier = () => {
    return function (num1, num2) {
        return num1 * num2
    }
}
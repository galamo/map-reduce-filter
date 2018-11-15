const data = require("./data");

let carsPrices = data.map((car, index, arr) => {

    return car.price > 60500;

}).sort((a, b) => a - b)

//console.log(carsPrices);



let expCars = data.filter((car, index, arr) => {
    return car.price > 60500;
}).map((car) => {
    return car.model
})

// console.log(expCars);


let car = data.find((car) => {
    return car.manufacturer == "Audi";
})


// console.log(car)


let sumOfPrices = data.reduce((totalPrice, car) => {
    return totalPrice + car.price;
}, 0)
console.log(sumOfPrices)


let modelsString = data.reduce((manufacturerString, car) => {
    return manufacturerString.includes(car.manufacturer) ? manufacturerString : `${manufacturerString} ${car.manufacturer}`;
    // if (manufacturerString.includes(car.manufacturer)) {
    //     console.log("includes")
    //     return manufacturerString;
    // }
    // else {
    //     return `${manufacturerString} ${car.manufacturer}`
    // }

}, "")
console.log(modelsString)



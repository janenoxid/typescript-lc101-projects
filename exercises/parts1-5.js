"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
//let spacecraftName: string = 'Determination';
//let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
//let milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
// let milesToMars: number = multiply(kilometersToMars, milesPerKilometer);
// let hoursToMars: number = divide(milesToMars, speedMph); 
// let daysToMars: number = divide(hoursToMars, 24)
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway:number = multiply(kilometersAway, milesPerKilometer);
//     let hoursToLocation: number = divide(milesAway, speedMph); 
//     let daysToLocation: number = divide(hoursToLocation, 24);
//     return daysToLocation;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
//----console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to get to Mars`)
//----console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon`)
// Part 4: Create a Spacecraft Class
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    SpaceCraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = multiply(kilometersAway, this.milesPerKilometer);
        var hoursToLocation = divide(milesAway, this.speedMph);
        var daysToLocation = divide(hoursToLocation, 24);
        return daysToLocation;
    };
    SpaceCraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return SpaceCraft;
}());
// Create an instance of the class here:
var spaceShuttle = new SpaceCraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
//---- console.log(`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars`)
//---- console.log(`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon`)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));

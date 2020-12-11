import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo"; 

export class Rocket {
    name: string;
    totalCapacityKg: number; 
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg; 
    }

    sumMass( items: Payload[] = []): number {
        // returns the sum of all items using each item's massKG property. 
        // - use a for loop?? 
        let sum: number = 0; 
        for (let i:number = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        return sum; 
    }

    currentMassKg(): number {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let sum: number = 0; 
        sum = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return sum; 
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        else return false; 
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        } else false;
        // Uses this.canAdd() to see if another item can be added.
        // If true, adds cargo to this.cargoItems and returns true.
        // If false, returns false.
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else false;
        // Uses this.canAdd() to see if another astronaut can be added.
        // If true, adds astronaut to this.astronauts and returns true.
        // If false, returns false.        
    }

}
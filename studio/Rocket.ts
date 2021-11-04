import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name:string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;        
    }
//input is an items array that contains only payloads.
//outputs the sum of all the masses of payloads
    sumMass( items: Payload[] ): number {
        let mass: number = 0
        for (let i=0; i < items.length; i++) {
            mass += items[i].massKg;
        }
        return mass
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    //#4
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo) 
            return true
        } else {
            return false
        }
    }

    //#5
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut) 
            return true
        } else {
            return false
        }
    }

}
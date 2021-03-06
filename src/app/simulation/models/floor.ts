import { Elevator } from './elevator';
import { Passenger } from './passenger';

export class Floor {

    private floorNumber: number;
    private elevators: Array<Elevator>;
    private passengers: Array<Passenger>;

    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
        this.elevators = new Array();
        this.passengers = new Array();
    }

    public getFloorNumber(): number {
        return this.floorNumber;
    }

    public addPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    public removePassenger(): Passenger {
        return this.passengers.splice(0, 1)[0];
    }

    public getNumberOfPassengersWaiting(): number {
        return this.passengers.length;
    }

    public setElevator(elevator: Elevator) {
        this.elevators.push(elevator);
    }

    public removeElevator(elevator: Elevator): Elevator {
        let index = this.elevators.indexOf(elevator);
        let current = this.elevators.splice(index, 1)[0];
        return current;
    }
    
}

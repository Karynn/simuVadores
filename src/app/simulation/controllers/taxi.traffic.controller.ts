import { Elevator } from "../models/elevator";
import { Floor } from "../models/floor";
import { Passenger } from "../models/passenger";
import { ResultController } from "./result.controller";

export class TaxiTrafficController {

    private resultController: ResultController;
    private paseengersToIn: Array<Passenger> = new Array();

    constructor(resultController: ResultController) {
        this.resultController = resultController;
    }

    public passPassengers(elevator: Elevator, floor: Floor): void {
        let currentFloor = floor.getFloorNumber();
        this.resultController.managePassengers(elevator.getPassengerTransported(currentFloor));
        if (floor.getNumberOfPassengersWaiting() > 0) {
            let currentPassenger: Passenger = floor.removePassenger();
            if (elevator.addPassenger(currentPassenger)) {
                currentPassenger.runTarget();
            } else {
                floor.addPassenger(currentPassenger);
            }
        }
    }
}
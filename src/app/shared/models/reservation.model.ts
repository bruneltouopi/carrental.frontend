import Customer from "./customer.model";
import Car from "./car.model";
import { BaseModel } from "../abstraction/base.model";

export default class Reservation extends BaseModel {
    public id: number;
    public startDate: Date;
    public endDate: Date;
    public customer: number;
    public car: number;
    public paid: boolean;

    public realCustomer: Customer;
    public realCar: Car;
}
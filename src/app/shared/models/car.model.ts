import { BaseModel } from "../abstraction/base.model";

export default class Car extends BaseModel {
    public id: number;
    public name: string;
    public pricePerDay: number;
    public reservations: number[];
}
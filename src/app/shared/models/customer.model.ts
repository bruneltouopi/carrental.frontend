import { BaseModel } from "../abstraction/base.model";

export default class Customer extends BaseModel {
    public id: number;
    public name: string;
    public email: string;
    public reservations: number[];
}
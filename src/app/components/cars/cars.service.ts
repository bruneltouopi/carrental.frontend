import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Car from '../../shared/models/car.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService extends BaseService<Car> {

  constructor(http: HttpClient) {
    super(http, "cars");
  }

  findAll() : Observable<Car[]> {
    return this.get();
  }
}

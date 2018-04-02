import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Car from '../../shared/models/car.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarCreationService extends BaseService<Car> {

  constructor(http: HttpClient) {
    super(http, "cars");
  }

}

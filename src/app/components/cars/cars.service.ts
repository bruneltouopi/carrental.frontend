import { Injectable } from '@angular/core';
import BaseService from '../../shared/abstraction/base.service';
import Car from '../../shared/models/car.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Cache from '../../shared/cache/Cache';

@Injectable()
export class CarsService extends BaseService<Car> {
 
  constructor(http: HttpClient, cache: Cache) {
    super(http, cache, "cars");
  }

  findAll() : Observable<Car[]> {
    return this.get();
  }
}

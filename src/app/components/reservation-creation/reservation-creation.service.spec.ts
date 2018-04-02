import { TestBed, inject } from '@angular/core/testing';

import { ReservationCreationService } from './reservation-creation.service';

describe('ReservationCreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationCreationService]
    });
  });

  it('should be created', inject([ReservationCreationService], (service: ReservationCreationService) => {
    expect(service).toBeTruthy();
  }));
});

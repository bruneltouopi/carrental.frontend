import { TestBed, inject } from '@angular/core/testing';

import { ReservationDetailService } from './reservation-detail-service.service';

describe('ReservationDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationDetailService]
    });
  });

  it('should be created', inject([ReservationDetailService], (service: ReservationDetailService) => {
    expect(service).toBeTruthy();
  }));
});

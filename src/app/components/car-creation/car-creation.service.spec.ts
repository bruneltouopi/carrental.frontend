import { TestBed, inject } from '@angular/core/testing';

import { CarCreationService } from './car-creation.service';

describe('CarCreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarCreationService]
    });
  });

  it('should be created', inject([CarCreationService], (service: CarCreationService) => {
    expect(service).toBeTruthy();
  }));
});

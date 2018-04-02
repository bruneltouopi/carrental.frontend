import { TestBed, inject } from '@angular/core/testing';

import { CustomerCreationService } from './customer-creation.service';

describe('CustomerCreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerCreationService]
    });
  });

  it('should be created', inject([CustomerCreationService], (service: CustomerCreationService) => {
    expect(service).toBeTruthy();
  }));
});

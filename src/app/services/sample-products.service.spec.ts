import { TestBed } from '@angular/core/testing';

import { SampleProductsService } from './sample-products.service';

describe('SampleProductsService', () => {
  let service: SampleProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

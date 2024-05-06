import { TestBed } from '@angular/core/testing';

import { InsanoService } from './insano.service';

describe('InsanoService', () => {
  let service: InsanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

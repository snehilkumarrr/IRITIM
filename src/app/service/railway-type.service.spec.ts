import { TestBed } from '@angular/core/testing';

import { RailwayTypeService } from './railway-type.service';

describe('RailwayTypeService', () => {
  let service: RailwayTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailwayTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

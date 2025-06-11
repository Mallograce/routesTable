import { TestBed } from '@angular/core/testing';

import { RouteTableService } from './route-table-service';

describe('RouteTableService', () => {
  let service: RouteTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApiOptionsService } from './api-options.service';

describe('ApiOptionsService', () => {
  let service: ApiOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

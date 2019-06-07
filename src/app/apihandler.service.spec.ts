import { TestBed } from '@angular/core/testing';

import { ApihandlerService } from './apihandler.service';

describe('ApihandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApihandlerService = TestBed.get(ApihandlerService);
    expect(service).toBeTruthy();
  });
});

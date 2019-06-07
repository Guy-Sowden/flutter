import { TestBed } from '@angular/core/testing';

import { CompadbillityService } from './compadbillity.service';

describe('CompadbillityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompadbillityService = TestBed.get(CompadbillityService);
    expect(service).toBeTruthy();
  });
});

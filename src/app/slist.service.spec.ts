import { TestBed } from '@angular/core/testing';

import { SlistService } from './slist.service';

describe('SlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlistService = TestBed.get(SlistService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { KpCoreService } from './kp-core.service';

describe('KpCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KpCoreService = TestBed.get(KpCoreService);
    expect(service).toBeTruthy();
  });
});

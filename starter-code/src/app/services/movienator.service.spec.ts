import { TestBed, inject } from '@angular/core/testing';

import { MovienatorService } from './movienator.service';

describe('MovienatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovienatorService]
    });
  });

  it('should be created', inject([MovienatorService], (service: MovienatorService) => {
    expect(service).toBeTruthy();
  }));
});

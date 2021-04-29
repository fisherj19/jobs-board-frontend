import { TestBed } from '@angular/core/testing';

import { addJobService } from './addJob.service';

describe('addJobService', () => {
  let service: addJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(addJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

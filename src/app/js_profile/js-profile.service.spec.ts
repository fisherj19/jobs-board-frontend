import { TestBed } from '@angular/core/testing';

import { JsProfileService } from './js-profile.service';

describe('JsProfileService', () => {
  let service: JsProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

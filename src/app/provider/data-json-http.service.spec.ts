import { TestBed } from '@angular/core/testing';

import { DataJsonHTTPService } from './data-json-http.service';

describe('DataJsonHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataJsonHTTPService = TestBed.get(DataJsonHTTPService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BigDocumentService } from './big-document.service';

describe('BigDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigDocumentService = TestBed.get(BigDocumentService);
    expect(service).toBeTruthy();
  });
});

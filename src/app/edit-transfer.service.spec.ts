import {TestBed} from '@angular/core/testing';

import {EditTransferService} from './edit-transfer.service';

describe('EditTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditTransferService = TestBed.get(EditTransferService);
    expect(service).toBeTruthy();
  });
});

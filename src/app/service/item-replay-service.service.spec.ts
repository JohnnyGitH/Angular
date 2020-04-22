import { TestBed } from '@angular/core/testing';

import { ItemReplayServiceService } from './item-replay-service.service';

describe('ItemReplayServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemReplayServiceService = TestBed.get(ItemReplayServiceService);
    expect(service).toBeTruthy();
  });
});

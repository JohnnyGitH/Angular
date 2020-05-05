import { TestBed } from '@angular/core/testing';

import { ItemReplayServiceService } from './item-replay-service.service';
import { LoggerTestingModule } from 'ngx-logger/testing';

describe('Item Replay Service Service', () => {
  let service: ItemReplayServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoggerTestingModule]
    });
    service = TestBed.inject(ItemReplayServiceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

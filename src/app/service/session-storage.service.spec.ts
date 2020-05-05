import { async, TestBed } from '@angular/core/testing';
import { SessionStorageService } from './session-storage.service';
import { createServiceFactory } from '@ngneat/spectator';
import { NGXLogger } from 'ngx-logger';

describe('SessionStorageService', () => {
  let service: SessionStorageService;
  const createService = createServiceFactory({
    service: SessionStorageService,
    providers: [ NGXLogger ]
  });

  beforeEach(async(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageService);
  }));

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});

import { TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { Echo2Service } from './echo-2.service';
import { SpectatorService, createServiceFactory, SpyObject } from '@ngneat/spectator';
import { EchoService } from '../echo/echo.service';
import { throwError, of } from 'rxjs';
import { ExpectedConditions } from 'protractor';
import EchoData from '../../models/echo-data.model';

// Purpose od this test file is to show how to test a service that depends on others
describe('Echo2Service', () => {
  // For accessing target service
  let service: Echo2Service;
  // for accessing the target service and its dependecies
  let spectator: SpectatorService<Echo2Service>;
  // function call that extends the basic Angular Testing Module options
  const createService = createServiceFactory({
    service: Echo2Service,
    mocks: [ EchoService ]
  });

  beforeEach(() => {
    // Create a new instance of the service and all its dependencies before each test is run
    spectator = createService();
    service = spectator.service;
  });

  describe('echo', () => {
    // Declare variables needed for testing target method within describe for the method
    let mockEcho: SpyObject<EchoService>;

    beforeEach(() => {
      // setup injection needed before each test run
      mockEcho = spectator.inject(EchoService);
    });

    it('should receive error when provide null input', (done: DoneFn) => {
      // Input for the target method should be stored in variable called input,
      // if more than one inputs are needed, the variable names should start with input
      const input = null;
      // Substitute return value of the dependency of target method
      mockEcho.echo.and.returnValue(throwError('Should not reach here'));
      service.echo(input).subscribe(
        // Unexpected Result,
        // call done.fail function to cause current test to fail and stop executed
        actual => done.fail(`Received ${ actual }`),
        error => {
          // Call done function at the end of expect to stop execution
          expect(error).toBeTruthy();
          done();
        }
      );
    });

    it('should receive error when provide empty input', (done: DoneFn) => {
      const input = '';
      mockEcho.echo.and.returnValue(throwError('Should not reach here'));
      service.echo(input).subscribe(
        // Unexpected result,
        // call done.fail function to cause current test to fail and stop execution
        actual => done.fail(`Received ${actual}`),
        error => {
          expect(error).toBeTruthy();
          done();
        }
      );
    });

    it('should echo the value provided', (done: DoneFn) => {
      const input = faker.random.word();
      // substitute return value of the dependency of target method
      mockEcho.echo.and.returnValue(of({ data: input } as EchoData));
      service.echo(input).subscribe(
        actual => {
          // Call done function at the end of expect to stop execution
          expect(actual).toEqual(input);
          done();
        },
        // Unexpected result,
        // call done.file function to cause current test to fail and stop execution
        error => done.fail(error)
      );
    });
  });
});

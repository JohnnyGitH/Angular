import { TestBed } from '@angular/core/testing';
import { EchoService } from './echo.service';
import * as faker from 'faker';
import { Spectator, SpectatorHttp, createHttpFactory, HttpMethod } from '@ngneat/spectator';
import { ECHO_URL } from '../../models/injection-tokens.store';

// Main purpose of this test file is to show how to test a service with HTTP request
// For more information on testing service with HTTP request:
describe('EchoService', () => {
  // Mocked URL endpoint
  const url = faker.internet.url();
  // Accessing the service
  let service: EchoService;
  // For accessing the target service and its dependencies
  let spectator: SpectatorHttp<EchoService>;
  // Function call that extends the basic Angular Testing Module options
  const createHttp = createHttpFactory({
    service: EchoService,
    providers: [{ provide: ECHO_URL, useValue: url}]
  });

  beforeEach(() => {
    // Create a new instance of the service and all its dependecies before each tes is run
    spectator = createHttp();
    service = spectator.service;
  });

  /**
   * All unit tests for the same method should be in a group together under one describe
   * and description of the describe should be the method name
   */
  describe('echo', () => {
    /**
     * The test description should accurately reflect what this test is testing
     * If testing asynchronous method, test should utilize DownFn to avoid timeout
     * for more infor about DoneFn
     */
    it('should receive error when provide null input', (done: DoneFn) => {
      /**
       * Input for the target method should be stored in variable called input
       * if more than on is used, start with input
       */
      const input = null;

      service.echo(input).subscribe(
        // unexpected result,
        // call done. fail function to cause current tes to fail and stop execution
        actual => done.fail(`Received ${actual}`),
        // Call done function at the end of the expect to stop execution
        error => {
          expect(error).toBeTruthy();
          done();
        }
      );
    });


    it('should echo the value provided', (done: DoneFn) => {
      const input = { data: faker.random.word() };

      service.echo(input).subscribe(
        // Call done function at the end of expect to stop execution
        actual => {
          expect(actual).toEqual(input);
          done();
        },
        // unexpected result,
        // call done.fail function to cause current test to fail and stop execution
        error => done.fail(error)
      );

      // Expect that a single request was made and the request body equals to input
      const req = spectator.expectOne( url, HttpMethod.POST);
      expect(req.request.body).toEqual(input);
      // Resolve the request
      // Note: if expecting multiple request, use flushAll method to resolve all of them at once
      req.flush({ json: input });
    });
  });
});

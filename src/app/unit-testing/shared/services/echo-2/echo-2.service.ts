import { Injectable } from '@angular/core';
import { EchoService } from '../echo/echo.service';
import { Observable, throwError } from 'rxjs';
import EchoData from '../../models/echo-data.model';
import { map } from 'rxjs/operators';

/**
 * This Service is to showcase how to test a service that depends on other services 
 * in this case, it relies on EchoService.
 */
@Injectable()
export class Echo2Service {

  /**
   * Take in needed dependencies (Echo2Service) via constructor to allow
   * unit tests to inject mocks
   *
   * @param echoService  Http echo service
   */
  constructor(private echoService: EchoService) { }

  /**
   * This echo function checks the validity of the input.
   * it then returns, using the echoService echo and input
   * @param input input is the string from user
   */
  echo(input: string): Observable<string> {
    if (!input || input.length < 1) {
      return throwError('Input cannot be null or empty');
    }
    return this.echoService.echo({data: input } as EchoData).pipe(map(d => d.data));
  }
}

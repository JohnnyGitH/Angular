import { Injectable, Inject } from '@angular/core';
import EchoData from '../../models/echo-data.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ECHO_URL } from '../../models/injection-tokens.store';

/**
 * The purpose of this service is to show how to test a service with http request
 */
@Injectable()
export class EchoService {

  /**
   * declare the needed dependencies in the constructor to allow unit tests to inject mocks
   * @param url - Url of echo endpoint
   * @param httpClient - Http client
   */
  constructor(@Inject(ECHO_URL) private readonly url: string, private httpClient: HttpClient) { }

  /**
   * Checks is the data is null or empty. Then posts the data to the Echo URL
   * @param data - Input value to send
   */
  echo(data: EchoData): Observable<EchoData> {
    if (!data) {
      return throwError('Echo data cannot be empty');
    }
    return this.httpClient.post<any>(this.url, data).pipe(map(r => r.json as EchoData));
  }
}

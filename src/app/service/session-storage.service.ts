import { Injectable } from '@angular/core';
import { range, Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { KVP } from '../components/web-storage/models/kvp';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(private logger: NGXLogger) { }

/**
 * This function accesses local storage, uses
 * the user provided key and value and stores
 * them using the setItem function. Will
 * throw an exception if storage is full.
 * @param key  key value from user input
 * @param value value value from user input
 */
addKVPToSessionStorage(key: string, value: string): void {
  sessionStorage.setItem(key, value);
  this.logger.info('In the session storage service. Key: ' + key + ' Value: ' + value );
}

  /**
   * This function returns an Observable of type KVP array
   * range -> emits values in provided range in sequence (sessionStorage.length)
   * pipe -> Assembly line for observable data source through operators.
   * where you can manipulate, filter and transform the data
   * map -> Allows you to apply a transformation to each item in observable
   * ex: source.pipe(map(val => val + 10)); Adds 10 to each value in source.
   * Key / getItem - both sessionStorage keywords for manipulating KVP
   * toArray() - Collects all emissions from source and emits them as
   * an array when it completes.
   */
  getAllKVPInSessionStorage(): Observable<KVP[]> {
    this.logger.info('In the session storage service. SERVICE');
    return range(sessionStorage.length).pipe(
      map( i => {
        const key = sessionStorage.key(i);
        return{
          key,
          value: sessionStorage.getItem(key)
        };
      }),
      toArray()
    );
  }

  deleteKVPInSessionStorage(key: string){
    sessionStorage.removeItem(key);
    this.logger.info('Removed KVP with Key: ' + key);
  }

  /**
   * Apocalypse level deletion of Session Storage
   */
  deleteEverything(){
    sessionStorage.clear();
  }
}

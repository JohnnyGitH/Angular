import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { KVP } from '../components/web-storage/models/kvp';
import { Observable, range } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * This service will handle all the get, update, delete actions
 * within the local storage.
 * It stores data with no expiration date, and gets cleared
 * only through javascript or clearing the Browser Cache /
 * locally stored data
 * Storage limit is the maximum amongst the 3
 */
export class LocalStorageService {

  constructor(private logger: NGXLogger) { }

/**
 * This function accesses local storage, uses
 * the user provided key and value and stores
 * them using the setItem function. Will
 * throw an exception if storage is full.
 * @param key  key value from user input
 * @param value value value from user input
 */
  addKVPToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
    this.logger.info('In the local storage service. Key: ' + key + ' Value: ' + value );
  }

  /**
   * This function returns an Observable of type KVP array
   * range -> emits values in provided range in sequence (localStorage.length)
   * pipe -> Assembly line for observable data source through operators.
   * where you can manipulate, filter and transform the data
   * map -> Allows you to apply a transformation to each item in observable
   * ex: source.pipe(map(val => val + 10)); Adds 10 to each value in source.
   * Key / getItem - both localStorage keywords for manipulating KVP
   * toArray() - Collects all emissions from source and emits them as
   * an array when it completes.
   */
  getAllKVPInLocalStorage(): Observable<KVP[]> {
    this.logger.info('In the local storage service.');
    return range(localStorage.length).pipe(
      map( i => {
        const key = localStorage.key(i);
        return{
          key,
          value: localStorage.getItem(key)
        };
      }),
      toArray()
    );
  }

  deleteKVPinLocalStorage(key: string){
    localStorage.removeItem(key);
    this.logger.info('Removed KVP with Key: ' + key);
  }

  /**
   * Apocalypse level deletion of Session Storage
   */
  deleteEverything(){
    localStorage.clear();
  }
}

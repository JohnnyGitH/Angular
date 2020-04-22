import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { NGXLogger } from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SessionStorageService } from 'src/app/service/session-storage.service';

@Component({
  selector: 'app-web-storage',
  templateUrl: './web-storage.component.html',
  styleUrls: ['./web-storage.component.css']
})
export class WebStorageComponent implements OnInit {
  // Need to validate the inputes for the Key and Value pair
  keyInputField = new FormControl('', Validators.required);
  valueInputField = new FormControl('', Validators.required);

  constructor(private local: LocalStorageService, private logger: NGXLogger, private session: SessionStorageService) { }

  /**
   * Get an array of KVP values from getAllKVPInLocalStorage()
   * calling this function in the UI
   */
  get localStorageState(): Observable<any> {
    return this.local.getAllKVPInLocalStorage().pipe(
      map( pairs => {
        const obj = {};
        for (const pair of pairs) {
          obj[pair.key] = pair.value;
        }
        return obj;
      }),
      catchError(err => {
        this.logger.warn('Web-Storage-Component.localStorageState: Unexpected error occurred ', err);
        // return an empty object on error
        return of({});
      })
    );
  }

  /**
   * Get an array of KVP from getAllKVPInSessionStorage
   * calling this function in the UI
   */
  get sessionStorageState(): Observable<any> {
    return this.session.getAllKVPInSessionStorage().pipe(
      map( pairs => {
        const obj = {};
        for (const pair of pairs) {
          obj[pair.key] = pair.value;
        }
        return obj;
      }),
      catchError(err => {
        this.logger.warn('Web-Storage-Component.sessionStorageState: Unexpected error occurred ', err);
        // return an empty object on error
        return of({});
      })
    );
  }

  deleteLocalKVP() {
    this.local.deleteKVPinLocalStorage(this.keyInputField.value);
  }
  deleteSessionKVP() {
    this.session.deleteKVPInSessionStorage(this.keyInputField.value);
  }
  deleteBothSessionLocalKVP() {
    this.session.deleteEverything();
    this.local.deleteEverything();
  }

  /**
   * Checking inputs for validity, then sending the values to the local storage
   * service to be added to the local storage
   */
  addKVPToLocalStorage() {
    if (this.keyInputField.valid && this.valueInputField.valid) {
      /**
       * If both are valid, I can then access the local-storage service and update
       *  local storage
       */
      const key = this.keyInputField.value;
      const value = this.valueInputField.value;
      this.logger.info('Sending off key and value to the local storage service. Key: ' + key + ' Value: ' + value );
      this.local.addKVPToLocalStorage( key, value );

    }
  }

  addKVPToSessionStorage() {
    if (this.keyInputField.valid && this.valueInputField.valid) {
      /**
       * If both are valid, I can then access the local-storage service and update
       *  local storage
       */
      const key = this.keyInputField.value;
      const value = this.valueInputField.value;
      this.logger.info('Sending off key and value to the local storage service. Key: ' + key + ' Value: ' + value );
      this.session.addKVPToSessionStorage( key, value );
  }}

  ngOnInit() {
  }

}

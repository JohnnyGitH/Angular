import { Injectable, Input } from '@angular/core';
import { skip, take, filter, toArray, catchError, tap } from 'rxjs/operators';
import { ReplaySubject, Observable, of, EMPTY } from 'rxjs';
import { Item } from '../models/item.model';
import { NGXLogger } from 'ngx-logger';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class ItemReplayServiceService {

  _replaySubject: ReplaySubject<Item>;

  private counter = 0;

  constructor(private logger: NGXLogger) {

   this._replaySubject = new ReplaySubject<Item>();
  }

  /**
   * Returns the counter of the number of
   * items in the sequence
   */
  get subjectSize(): number {
  return this.counter;
  }

  /**
   * Returns an observable that outputs the next item
   * generated for the replay subject
   */
  get replaySubjectObservable(): Observable<Item> {
    return this._replaySubject.asObservable();
  }

  /**
   * Generate an Item with faker, add it to the replaySubject
   * This is happening in the service.
   */
  createItemReplayItem() {
    this.logger.info('createItemReplayItem() started');
    const abc = new Item();
    abc.alias = faker.random.word();
    abc.firstName = faker.name.firstName();
    abc.lastName = faker.name.lastName();
    abc.id = faker.random.uuid();
    // tslint:disable-next-line: max-line-length
    this.logger.info('This Item created is Alias : ' + abc.alias + ' first name : ' + abc.firstName + ' last name : ' + abc.lastName + ' id : ' + abc.id );
    // Send Item to Replay Subject to be added
    this.addAnItem(abc);
    this.logger.info('this is the size of the replay subject : ' + this.subjectSize);
  }

  /**
   * Adding new item to the replay subject
   * @param item New Item to add to subject
   */
  addAnItem(item: Item ): void {
    // Increment counter for size of subject
    this.counter++;
    this.logger.info('addAnItem() Item being added to replay Subject: ' + item.alias);
    this._replaySubject.next(item);
  }

  /**
   * Gets the items From the replay subject as an array
   */
  get list(): Observable<Item[]> {
    return this.replaySubjectObservable.pipe(
      take(this.subjectSize),
      toArray(),
      catchError(err => {
        this.logger.warn('Unexpected error occurred attempting to get the sequence values: ', err);
        return of ([]);
      })
    );
  }

  /**
   * Clear the replay subject
   * @param event click event to clear the subject
   */
  clearSubject(event) {
    this.logger.info('EventEmitter to clearSubject()');
    if (!!event) {
      this.logger.info('Event is valid, clearing replaySubject. Event: ' + event);
      this._replaySubject = new ReplaySubject<Item>();
      this.counter = 0;
    }
  }
}


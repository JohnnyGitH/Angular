import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemReplayServiceService } from 'src/app/service/item-replay-service.service';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import * as faker from 'faker';

@Component({
  selector: 'app-item-replay-view',
  templateUrl: './item-replay-view.component.html',
  styleUrls: ['./item-replay-view.component.css']
})
export class ItemReplayViewComponent implements OnInit {
  @Output() aliasChangeEmit: EventEmitter<string> = new EventEmitter<string>();
 /* @Output() submitEmit: EventEmitter<number> = new EventEmitter<number>();
  @Output() clearClicksEmit: EventEmitter<number> = new EventEmitter<number>();*/
  submitClicks = 0;
  clearClicks = 0;


  constructor(private replayService: ItemReplayServiceService, private logger: NGXLogger) { }

  /**
   * Get an observable of type Item[]
   * How do I get it to display in the template? It doesn't seem to iterate or see the items. **
   */
  get list(): Observable<Item[] | unknown> {
    return this.replayService.list;
  }

  /**
   * Button Function - Clear Replay Subject in service
   *
   * @param event click event
   */
  clearReplaySubject(event) {
    this.logger.info('Entering clearReplaySubject');
    if (event) {
      this.replayService.clearSubject(event);
      this.clearClicks++;
     /* this.clearClicksEmit.emit(this.clearClicks);
      this.logger.info('Emitted - clearReplaySubject - number : ' + this.clearClicks);*/
    }
  }

  /**
   * Button Function - Handles click event, this should trigger
   * the creation of a random item
   */
  submitReplayItem(event): void {
    this.logger.info('Submit button clicked');
    if (event) {
      this.replayService.createItemReplayItem();
      this.submitClicks++;
      /*this.submitButtonEmit.emit(this.submitClicks);
      this.logger.info('Emitted - generateItemReplayItem - number : ' + this.submitClicks);*/
    }
  }

  ngOnInit() {
  }

}

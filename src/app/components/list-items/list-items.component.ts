import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Observable } from 'rxjs';
import { ItemReplayServiceService } from 'src/app/service/item-replay-service.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})

/**
 * This List Items Component is responsible for displaying the values in the
 * replaySubject in the item Replay Service into the list Items component.
 * Also, it uses INPUT to get the number of clicks of buttons
 */
export class ListItemsComponent implements OnInit {
  private submitClicksTemp = 0;
  private clearClicksTemp = 0;
  @Input()
  set submitClicks(num: number) {
    this.submitClicksTemp = num;
  }
  @Input()
  set clearClicks(num: number) {
    this.clearClicksTemp = num;
  }

  /**
   * Returns the latest number of clicks of the submit button
   */
  get getSubmitClicks(): number {
    return this.submitClicksTemp;
  }

  /**
   * Returns the latest number of clicks of the clear button
   */
  get getClearClicks(): number {
    return this.clearClicksTemp;
  }

  constructor(private replayService: ItemReplayServiceService, private logger: NGXLogger) { }

  /**
   * Returns the Observable of Items using list() function in service
   */
  get items(): Observable<Item[] | unknown> {
    return this.replayService.list;
  }

  ngOnInit() {
  }

}

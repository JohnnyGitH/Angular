import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReplayViewComponent } from './item-replay-view.component';

describe('ItemReplayComponent', () => {
  let component: ItemReplayViewComponent;
  let fixture: ComponentFixture<ItemReplayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReplayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReplayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

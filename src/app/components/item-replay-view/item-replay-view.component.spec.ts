import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemReplayViewComponent } from './item-replay-view.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ListItemsComponent } from '../list-items/list-items.component';
import { NGXLogger } from 'ngx-logger';

describe('HomeViewComponent', () => {
  let component: ItemReplayViewComponent;
  let fixture: ComponentFixture<ItemReplayViewComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReplayViewComponent, ListItemsComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        MatCardModule,
      ],
      providers: [ NGXLogger]
    }).compileComponents();
    router = TestBed.get(Router);
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

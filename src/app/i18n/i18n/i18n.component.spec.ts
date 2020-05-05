import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nComponent } from './i18n.component';
import { ContentCardComponent } from '../content-card/content-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

describe('I18nComponent', () => {
  let component: I18nComponent;
  let fixture: ComponentFixture<I18nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [I18nComponent, ContentCardComponent],
      imports: [TranslateModule.forChild({}), MatCardModule, MatButtonModule],
      providers: [TranslateStore]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

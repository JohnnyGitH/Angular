import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDynamicComplexFormsComponent } from './reactive-dynamic-complex-forms.component';

describe('ReactiveDynamicComplexFormsComponent', () => {
  let component: ReactiveDynamicComplexFormsComponent;
  let fixture: ComponentFixture<ReactiveDynamicComplexFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDynamicComplexFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDynamicComplexFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { HomeViewComponent } from './home-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material';
import { Router } from '@angular/router';
import { LoggerModule } from 'ngx-logger';
import { LoggerTestingModule } from 'ngx-logger/testing/public_api';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeViewComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        MatGridListModule,
        MatCardModule,
        MatButtonModule
      ],
      providers: [
        LoggerModule,
        LoggerTestingModule
      ]
    }).compileComponents();
    // tslint:disable-next-line: deprecation
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });

  // describe('HomeViewComponent.navigateTo', () => {
  //   it('should call the navigateUrl function passing in the given url', () => {
  //     const navigationSpy = spyOn(router, 'navigateByUrl');
  //     const path = faker.random.word();
  //     component.navigateTo(path);
  //     expect(navigationSpy).toHaveBeenCalledWith(path);
  //   });
  // });
});

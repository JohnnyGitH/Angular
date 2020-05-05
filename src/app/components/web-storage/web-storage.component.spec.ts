import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Substitute } from '@fluffy-spoon/substitute';
import { WebStorageComponent } from './web-storage.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NGXLogger } from 'ngx-logger';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SessionStorageService } from 'src/app/service/session-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('Web Storage Component', () => {
  let component: WebStorageComponent;
  let fixture: ComponentFixture<WebStorageComponent>;
  let localStorageService: LocalStorageService;
  let sessionStorageService: SessionStorageService;

  beforeEach(async(() => {
    localStorageService = Substitute.for<LocalStorageService>();
    sessionStorageService = Substitute.for<SessionStorageService>();
    TestBed.configureTestingModule({
      declarations: [WebStorageComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        LoggerTestingModule,
        MatIconModule,
        ReactiveFormsModule
      ],
       providers: [
         {
           provide: LocalStorageService,
           useFactory: () => localStorageService
         },
         {
           provide: SessionStorageService,
           useFactory: () => sessionStorageService
         }
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

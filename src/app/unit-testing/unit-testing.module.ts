import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './shared/pipes/uppercase/uppercase.pipe';
import { UnitTestingComponent } from './unit-test/unit-testing.component';
import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EchoService } from './shared/services/echo/echo.service';
import { Echo2Service } from './shared/services/echo-2/echo-2.service';
import { ECHO_URL } from './shared/models/injection-tokens.store';

const routes: Routes = [{ path: '', component: UnitTestingComponent }];

@NgModule({
  declarations: [
    UnitTestingComponent,
     UppercasePipe
    ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EchoService,
    Echo2Service,
    { provide: ECHO_URL, useValue: 'http://httpbin.org/post' }
  ]
})
export class UnitTestingModule { }

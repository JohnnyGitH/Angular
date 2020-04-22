import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatFormField, MatFormFieldModule, MatInputModule, MatDividerModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ItemReplayViewComponent } from './components/item-replay-view/item-replay-view.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WebStorageComponent } from './components/web-storage/web-storage.component';
import { ReactiveDynamicComplexFormsComponent } from './components/reactive-dynamic-complex-forms/reactive-dynamic-complex-forms.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ItemReplayViewComponent,
    ListItemsComponent,
    WebStorageComponent,
    ReactiveDynamicComplexFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

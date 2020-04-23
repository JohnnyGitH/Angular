import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nComponent } from './i18n/i18n.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Language } from './models/language.enum';
import { HttpClient } from '@angular/common/http';
import { I18nRoutingModule } from './i18n-routing.module';



export function TranslateLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/' );
}

@NgModule({
  declarations: [
     I18nComponent,
     ContentCardComponent
    ],
  imports: [
      I18nRoutingModule,
      CommonModule,
      MatCardModule,
      MatButtonModule,
      TranslateModule.forChild({
        defaultLanguage: Language.EN,
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateLoaderFactory,
          deps: [HttpClient]
        }
      })
    ],
    providers:[TranslateStore]
})
export class I18nModule { }

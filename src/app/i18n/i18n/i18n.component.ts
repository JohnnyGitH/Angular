import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../models/language.enum';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})

/**
 * Why are we using OnDestroy?
 * A lot of set up for this to work. We need to create our own module.ts // Ask Tyler/Hannah
 * Also created a language enum for French and English.
 * Also create a content-card for the text to be displayed.
 *
 */
export class I18nComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  langParam = { lang: 'en' };

  constructor(private logger: NGXLogger, private translate: TranslateService) {
    // Setting a list of possible languages to change between
    this.translate.addLangs([Language.EN, Language.FR]);
    // set the current language
    this.translate.use(Language.EN);
   }

   ngOnInit(): void {
    // Update the langChoice whenever there is a language change
    this.subscription = this.translate.onLangChange.subscribe( e => (this.langParam.lang = e.lang));
    this.logger.info('Create Create Create');
  }

  ngOnDestroy(): void {
    // Must unsubscribe - Ask why.
    this.subscription.unsubscribe();
    this.logger.warn('Destroy Destroy Destroy');
  }

  /**
   * This function is called to decide on which language to use. It defaults
   * to English, depending on what the currentLang is.
   */
  convertLanguage() {
    const next = this.translate.currentLang === Language.EN ? Language.FR : Language.EN;
    this.translate.use(next);
  }



}

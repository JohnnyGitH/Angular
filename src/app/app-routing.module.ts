import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ItemReplayViewComponent } from './components/item-replay-view/item-replay-view.component';
import { WebStorageComponent } from './components/web-storage/web-storage.component';
import { ReactiveDynamicComplexFormsComponent } from './components/reactive-dynamic-complex-forms/reactive-dynamic-complex-forms.component';
import { UnitTestingComponent } from './unit-testing/unit-test/unit-testing.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'reactive-dynamic-complex-forms', component: ReactiveDynamicComplexFormsComponent },
  { path: 'item-replay', component: ItemReplayViewComponent },
  { path: 'web-storage', component: WebStorageComponent },
  // { path: 'unit-testing', component: UnitTestingComponent },
  { path: 'i18n', loadChildren: () => import('./i18n/i18n.module').then(m => m.I18nModule) },
  { path: 'unit-testing', loadChildren: () => import('./unit-testing/unit-testing.module').then(m => m.UnitTestingModule) },
  { path: '**', component: HomeViewComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

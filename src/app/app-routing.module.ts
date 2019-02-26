import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExternalPageComponent} from './external-page/external-page.component';
import {MakeTransferComponent} from './make-transfer/make-transfer.component';

const routes: Routes = [
  {path: 'external', component: ExternalPageComponent},
  {path: 'transfer', component: MakeTransferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

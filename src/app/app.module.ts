import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import {StoreModule} from '@ngrx/store';
import {makeTransferReducer} from './reducers/make-transfer.reducer';
import {NgrxFormsModule} from 'ngrx-forms';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxFormsModule,
    StoreModule.forRoot({makeTransfer: makeTransferReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

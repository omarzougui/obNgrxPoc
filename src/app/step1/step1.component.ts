import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Step1State, TransferAppState} from '../reducers/state-model';
import {FormGroupState} from 'ngrx-forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  formState1$: Observable<FormGroupState<Step1State>>;
  amountReadonly$: Observable<boolean>;

  constructor(private  store: Store<{ makeTransfer: TransferAppState }>) {
  }

  ngOnInit() {
    this.formState1$ = this.store.select(s => s.makeTransfer.formState1);
    this.amountReadonly$ = this.store.select(s => s.makeTransfer.config.amountReadonly);

  }

  logState() {
    this.store.select(s => s.makeTransfer).subscribe((res) => {
      console.log(res);
    });
  }

}

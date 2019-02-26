import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroupState} from 'ngrx-forms';
import {Step3State, TransferAppState} from '../reducers/state-model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  formState3$: Observable<FormGroupState<Step3State>>;
  motiveReadonly: Observable<boolean>;

  constructor(private  store: Store<{ makeTransfer: TransferAppState }>) {
  }

  ngOnInit() {
    this.formState3$ = this.store.select(s => s.makeTransfer.formState3);
    // this.amountReadonly$ =
    this.motiveReadonly = this.store.select(s => s.makeTransfer.config.motiveReadonly);

  }

}

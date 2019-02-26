import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroupState} from 'ngrx-forms';
import {Step2State, TransferAppState} from '../reducers/state-model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  formState2$: Observable<FormGroupState<Step2State>>;

  constructor(private  store: Store<{ makeTransfer: TransferAppState }>) {
  }

  ngOnInit() {
    this.formState2$ = this.store.select(s => s.makeTransfer.formState2);
  }

}

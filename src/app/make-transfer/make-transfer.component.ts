import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {TransferAppState} from '../reducers/state-model';
import {EditTransferX, EditTransferY, GoNext, GoPrev} from '../reducers/actions';
import {EditTransferService} from '../edit-transfer.service';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {

  currentPage$: Observable<number>;

  constructor(private  store: Store<{ makeTransfer: TransferAppState }>, private editTransferService: EditTransferService) {
  }

  ngOnInit() {
    this.loadForEditTransfer(this.editTransferService.transferForEdition);

    this.currentPage$ = this.store.select(s => s.makeTransfer.currentPage);
  }

  goToNextPage() {
    this.store.dispatch(new GoNext());
  }

  goToPrevPage() {
    this.store.dispatch(new GoPrev());
  }

  loadForEditTransfer(transfer: any) {
    console.log(transfer);

    if (!!transfer) {
      if (transfer.transferType === 'x') {
        this.store.dispatch(new EditTransferX(transfer));
      }
      if (transfer.transferType === 'y') {
        this.store.dispatch(new EditTransferY(transfer));
      }


    }

  }


}

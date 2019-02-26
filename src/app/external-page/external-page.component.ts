import {Component, OnInit} from '@angular/core';
import {EditTransferService} from '../edit-transfer.service';
import {Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-external-page',
  templateUrl: './external-page.component.html',
  styleUrls: ['./external-page.component.css']
})
export class ExternalPageComponent implements OnInit {

  myTransfer: any = {
    formState1: {
      amount: 500,
      isVIP: true,
    },
    formState2: {
      name: 'Trump'
    }
    ,
    formState3: {
      motive: 'money for wall building'
    }
  };

  myTransfer2: any = {
    formState1: {
      amount: 100,
      isVIP: false,
    },
    formState2: {
      name: 'Macron'
    }
    ,
    formState3: {
      motive: 'money fro yellow vest'
    }
  };

  constructor(private editTransferService: EditTransferService, private router: Router) {
  }

  ngOnInit() {
  }

  editTransfer1() {
    const mt = _.clone(this.myTransfer);
    mt.transferType = 'x';
    this.editTransferService.transferForEdition = mt;
    this.router.navigate(['/transfer']);
  }

  editTransfer2() {
    const mt = _.clone(this.myTransfer2);
    mt.transferType = 'y';
    this.editTransferService.transferForEdition = mt;
    this.router.navigate(['/transfer']);
  }


}




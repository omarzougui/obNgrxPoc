import {Action} from '@ngrx/store';

export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_NAME = 'SET_NAME';

export class SetAmount implements Action {
  readonly type = SET_AMOUNT;
  constructor(public payload: number){
    this.payload = payload;
  }

}

export class SetName implements Action {
  readonly type = SET_NAME;
  constructor(public payload: string) {
    this.payload = payload;
  }}


export type MakeTransferActions = SetAmount | SetName;

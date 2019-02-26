import {Action} from '@ngrx/store';
import {Step1State, Step2State, Step3State} from './state-model';
import {createFormGroupState, FormGroupState} from 'ngrx-forms';


export const FORM_ID_STEP_1 = 'STEP_001';
export const STEP_001_AMOUNT = 'STEP_001.amount';
export const STEP_001_IS_VIP = 'STEP_001.isVIP';

export const FORM_ID_STEP_2 = 'STEP_002';
export const STEP_002_NAME = 'STEP_002.name';

export const FORM_ID_STEP_3 = 'STEP_003';
export const STEP_003_MOTIVE = 'STEP_002.motive';


export const GO_NEXT = 'PAGE/GO_NEXT';
export const GO_PREV = 'PAGE/GO_PREV';
export const EDIT_TRANSFER_X = 'EDIT_TRANSFER/TRANSFER_TYPE_X';
export const EDIT_TRANSFER_Y = 'EDIT_TRANSFER/TRANSFER_TYPE_Y';

export class GoNext implements Action {
  readonly type = GO_NEXT;
}

export class GoPrev implements Action {
  readonly type = GO_PREV;
}

export class EditTransferX implements Action {
  readonly type = EDIT_TRANSFER_X;

  constructor(public payload: any) {
  }
}

export class EditTransferY implements Action {
  readonly type = EDIT_TRANSFER_Y;

  constructor(public payload: any) {
  }
}

export function isTransferNavigationAction(action) {
  return !!action.type && action.type.startsWith('PAGE/');
}

export function isTransferEditAction(action) {
  return !!action.type && action.type.startsWith('EDIT_TRANSFER/');
}

export type TransferNavigationAction = GoNext | GoPrev;
export type TransferEditAction = EditTransferX | EditTransferY;


export function createForm1State(amount = 0, isVIP = false): FormGroupState<Step1State> {
  return createFormGroupState<Step1State>(FORM_ID_STEP_1, {
    amount,
    isVIP,
  });
}

export function createForm2State(name: ''): FormGroupState<Step2State> {
  return createFormGroupState<Step2State>(FORM_ID_STEP_2, {
    name,
  });
}

export function createForm3State(motive = ''): FormGroupState<Step3State> {
  return createFormGroupState<Step3State>(FORM_ID_STEP_3, {
    motive,
  });
}

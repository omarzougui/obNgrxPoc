import {FormGroupState} from 'ngrx-forms';

export interface Step1State {
  amount: number;
  isVIP: boolean;
}

export interface Step2State {
  name: string;
}

export interface Step3State {
  motive: string;
}

export interface TransferAppState {
  formState1: FormGroupState<Step1State>;
  formState2: FormGroupState<Step2State>;
  formState3: FormGroupState<Step3State>;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  config: {
    maxAmount: number;
    amountReadonly?: boolean;
    motiveReadonly?: boolean;
  };
}

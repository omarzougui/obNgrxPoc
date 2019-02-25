import * as _ from 'lodash';
import {
  createFormGroupState,
  formGroupReducer,

  Actions,
  SetValueAction, FormGroupState
} from 'ngrx-forms';
import {Step1State, Step2State, Step3State, TransferAppState} from './state-model';

const FORM_ID_STEP_1 = 'STEP_001';
const STEP_001_AMOUNT = 'STEP_001.amount';
const STEP_001_IS_VIP = 'STEP_001.isVIP';

const FORM_ID_STEP_2 = 'STEP_002';
const STEP_002_NAME = 'STEP_002.name';

const FORM_ID_STEP_3 = 'STEP_003';
const STEP_003_MOTIVE = 'STEP_002.motive';

const initialStep1FormState = createFormGroupState<Step1State>(FORM_ID_STEP_1, {
  amount: 0,
  isVIP: false,
});

const initialStep2FormState = createFormGroupState<Step2State>(FORM_ID_STEP_2, {
  name: ''
});

const initialStep3FormState = createFormGroupState<Step3State>(FORM_ID_STEP_3, {
  motive: ''
});

const initialState = {
  formState1: initialStep1FormState,
  formState2: initialStep2FormState,
  formState3: initialStep3FormState,
  currentPage: 0,
  nextPage: 1,
};

function step1Reducer(state = initialState, action: Actions<any>): FormGroupState<Step1State> {
  const formState1 = formGroupReducer(state.formState1, action);
  if (formState1 !== state.formState1 ) {
     state = {...state, formState1}  ;
  }
  return state.formState1;
}

function step2Reducer(state = initialState, action: Actions<any>): FormGroupState<Step2State> {
  const formState2 = formGroupReducer(state.formState2, action);
  if (formState2 !== state.formState2 ) {
    state = {...state, formState2}  ;
  }
  return state.formState2;
}

function step3Reducer(state = initialState, action: Actions<any>): FormGroupState<Step3State> {
  const formState3 = formGroupReducer(state.formState3, action);
  if (formState3 !== state.formState3 ) {
    state = {...state, formState3}  ;
  }
  return state.formState3;
}

export function makeTransferReducer(state = initialState, action: Actions<any>): TransferAppState {

  state = _.merge(state,
    {formState1: step1Reducer(state, action)},
    {formState2: step2Reducer(state, action)},
    {formState3: step3Reducer(state, action)});

  switch (action.controlId) {
    case STEP_001_AMOUNT:
      break;
    case STEP_001_IS_VIP:
      if (action.type === SetValueAction.TYPE) {
        console.log('isVIP'); }
      break;
    case STEP_002_NAME:
      console.log('name');
      break;
    case STEP_003_MOTIVE:
      console.log('motive');
      break;
  }
  return state;

}

import {MakeTransferActions, SET_AMOUNT, SET_NAME} from '../actions/make-transfer.action';
import * as _ from 'lodash';
import {createFormControlState, createFormGroupState, formGroupReducer, setValue, updateGroup, validate} from 'ngrx-forms';
import {Step1State, Step2State, Step3State, TransferAppState} from './state-model';
import {required} from 'ngrx-forms/validation';


const FORM_ID_STEP_1 = 'STEP_001';
const initialStep1FormState = createFormGroupState<Step1State>(FORM_ID_STEP_1, {
  amount: 0,
  isVIP: false,
});

const FORM_ID_STEP_2 = 'STEP_002';
const initialStep2FormState = createFormGroupState<Step2State>(FORM_ID_STEP_2, {
  name: ''
});

const FORM_ID_STEP_3 = 'STEP_003';
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

export function makeTransferReducer(state = initialState, action: MakeTransferActions): TransferAppState {

  const formState1 = formGroupReducer(state.formState1, action);
  if (formState1 !== state.formState1 && state.formState1.isValid) {
    const amount = formState1.controls.amount.value;

    if (amount > 10_000) {
      const validateAmount = updateGroup<Step3State>({motive: validate(required)});
      state = {...state, formState1, formState3: validateAmount(state.formState3)};
    }


  }

  const formState2 = formGroupReducer(state.formState2, action);
  if (formState2 !== state.formState2 && state.formState2.isValid) {
    console.log('amount2');
    state = {...state, formState2};
  }

  const formState3 = formGroupReducer(state.formState3, action);
  if (formState3 !== state.formState3 && state.formState3.isValid) {
    console.log('amount3');
    state = {...state, formState3};
  }

  return state;

}


// console.log('reduce executed');
// switch (action.type) {
//   case SET_AMOUNT:
//   {
//     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
//     const control = createFormControlState<string>('STEP_001.amount', '');
//     const updatedControl = setValue(`${action.payload}`)(control);
//     return _.merge(state, {formState1: updatedControl});
//   }
//   case SET_NAME:
//     return state;
//   default:
// }

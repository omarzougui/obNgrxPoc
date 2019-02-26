import {Action} from '@ngrx/store';
import {Step1State, TransferAppState} from './state-model';
import {Actions, formGroupReducer, SetValueAction, updateGroup, validate} from 'ngrx-forms';
import {
  createForm1State,
  createForm2State,
  createForm3State,
  GO_NEXT,
  GO_PREV,
  TransferEditAction,
  TransferNavigationAction
} from './actions';
import * as _ from 'lodash';
import {lessThan} from 'ngrx-forms/validation';

const initialStep1FormState = createForm1State(0,  false);

const initialStep2FormState = createForm2State('');

const initialStep3FormState = createForm3State('');

export const initialState = {
  formState1: initialStep1FormState,
  formState2: initialStep2FormState,
  formState3: initialStep3FormState,
  currentPage: 1,
  nextPage: 2,
  prevPage: 0,
  config: {
    maxAmount: 1000,
  }
};

export function step1Reducer(state = initialState, action: Action): TransferAppState {
  const formState1 = formGroupReducer(state.formState1, action);
  if (formState1 !== state.formState1) {
    state = {...state, formState1};
  }
  return state;
}

export function step2Reducer(state = initialState, action: Action): TransferAppState {
  const formState2 = formGroupReducer(state.formState2, action);
  if (formState2 !== state.formState2) {
    state = {...state, formState2};
  }
  return state;
}

export function step3Reducer(state = initialState, action: Action): TransferAppState {
  const formState3 = formGroupReducer(state.formState3, action);
  if (formState3 !== state.formState3) {
    state = {...state, formState3};
  }
  return state;
}

export function navigationReducer(state = initialState, action: TransferNavigationAction): TransferAppState {
  switch (action.type) {
    case GO_NEXT:
      state = _.merge(state, {
        prevPage: state.currentPage,
        currentPage: state.nextPage,
        nextPage: ++state.nextPage,
      });
      break;
    case GO_PREV:
      state = _.merge(state, {
        nextPage: state.currentPage,
        currentPage: state.prevPage,
        prevPage: --state.prevPage,
      });
      break;
  }
  return state;
}

export function vipReducer(state = initialState, action: Actions<any>): TransferAppState {
  switch (action.type) {
    case SetValueAction.TYPE:
      state = action.value ? _.merge(state, {nextPage: ++state.nextPage}) : _.merge(state, {nextPage: --state.nextPage});

      const newCeiling = action.value ? 100_000 : 1_000;
      const formState1 = updateGroup<Step1State>({amount: validate(lessThan(newCeiling))});
      state = _.merge(state, {formState1: formState1(state.formState1)}, {config: {maxAmount: newCeiling}});
      break;
  }

  return state;
}



export function amountReducer(state = initialState, action: Actions<any>): TransferAppState {
  switch (action.type) {
    case SetValueAction.TYPE:
      const formState1 = updateGroup<Step1State>({amount: validate(lessThan(state.config.maxAmount))});
      state = _.merge(state, {formState1: formState1(state.formState1)});
      break;
  }
  return state;
}


export function EditTransferXReducer(state = initialState, action: TransferEditAction): TransferAppState {
  const payload = action.payload;
  state = _.merge(state, {
    formState1: createForm1State(payload.formState1.amount,  payload.formState1.isVIP),
  formState2: createForm2State(payload.formState2.name),
  formState3: createForm3State(payload.formState3.motive),
  currentPage: 2,
  nextPage: 3,
  prevPage: 1,
  config: {
    maxAmount: 5000,
    motiveReadonly: true,
    amountReadonly: false,
  }
  });

  return state;
}


export function EditTransferYReducer(state = initialState, action: TransferEditAction): TransferAppState {
  const payload = action.payload;
  state = _.merge(state, {
    formState1: createForm1State(payload.formState1.amount,  payload.formState1.isVIP),
    formState2: createForm2State(payload.formState2.name),
    formState3: createForm3State(payload.formState3.motive),
    currentPage: 1,
    nextPage: 2,
    prevPage: 0,
    config: {
      maxAmount: 5000,
      motiveReadonly: false,
      amountReadonly: true,
    }
  });

  return state;
}








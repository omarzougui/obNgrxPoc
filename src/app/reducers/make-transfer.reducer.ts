import * as _ from 'lodash';
import {Actions, isNgrxFormsAction} from 'ngrx-forms';
import {TransferAppState} from './state-model';
import {Action} from '@ngrx/store';
import {
  EDIT_TRANSFER_X,
  EDIT_TRANSFER_Y,
  isTransferEditAction,
  isTransferNavigationAction,
  STEP_001_AMOUNT,
  STEP_001_IS_VIP,
  STEP_002_NAME,
  STEP_003_MOTIVE,
  TransferEditAction,
  TransferNavigationAction
} from './actions';
import {
  amountReducer,
  EditTransferXReducer,
  EditTransferYReducer,
  initialState,
  navigationReducer,
  step1Reducer,
  step2Reducer,
  step3Reducer,
  vipReducer
} from './reducers';

export function makeTransferReducer(state = initialState, action: Action): TransferAppState {
  console.log(action);
  state = _.merge(state, step1Reducer(state, action), step2Reducer(state, action), step3Reducer(state, action));

  if (isNgrxFormsAction(action)) {
    const a = <Actions<any>>action;

    switch (a.controlId) {
      case STEP_001_AMOUNT:
        state = amountReducer(state, a);
        break;
      case STEP_001_IS_VIP:
        state = vipReducer(state, a);
        break;
      case STEP_002_NAME:
        console.log('name');
        break;
      case STEP_003_MOTIVE:
        console.log('motive');
        break;
    }
  }

  if (isTransferNavigationAction(action)) {
    state = _.merge(state, navigationReducer(state, action as TransferNavigationAction));
  }

  if (isTransferEditAction(action)) {
    switch (action.type) {
      case EDIT_TRANSFER_X:
        state = _.merge(state, EditTransferXReducer(state, action as TransferEditAction));
        break;
      case EDIT_TRANSFER_Y:
        state = _.merge(state, EditTransferYReducer(state, action as TransferEditAction));
        break;
    }
  }

  return state;
}



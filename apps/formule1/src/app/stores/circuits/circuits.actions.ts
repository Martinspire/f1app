import { createAction, props } from '@ngrx/store';
import { CircuitsEntity } from './circuits.models';

export const init = createAction('[Circuits Page] Init');

export const loadCircuitsSuccess = createAction(
  '[Circuits/API] Load Circuits Success',
  props<{ circuits: CircuitsEntity[] }>()
);

export const loadCircuitsFailure = createAction(
  '[Circuits/API] Load Circuits Failure',
  props<{ error: any }>()
);

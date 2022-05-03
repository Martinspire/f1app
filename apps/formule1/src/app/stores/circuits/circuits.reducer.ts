import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CircuitsActions from './circuits.actions';
import { CircuitsEntity } from './circuits.models';

export const CIRCUITS_FEATURE_KEY = 'circuits';

export interface State extends EntityState<CircuitsEntity> {
  selectedId?: string | number; // which Circuits record has been selected
  loaded: boolean; // has the Circuits list been loaded
  error?: string | null; // last known error (if any)
}

export interface CircuitsPartialState {
  readonly [CIRCUITS_FEATURE_KEY]: State;
}

export const circuitsAdapter: EntityAdapter<CircuitsEntity> =
  createEntityAdapter<CircuitsEntity>();

export const initialState: State = circuitsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const circuitsReducer = createReducer(
  initialState,
  on(CircuitsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CircuitsActions.loadCircuitsSuccess, (state, { circuits }) =>
    circuitsAdapter.setAll(circuits, { ...state, loaded: true })
  ),
  on(CircuitsActions.loadCircuitsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return circuitsReducer(state, action);
}

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DriversActions from './drivers.actions';
import { DriversEntity } from './drivers.models';

export const DRIVERS_FEATURE_KEY = 'drivers';

export interface State extends EntityState<DriversEntity> {
  selectedId?: string | number; // which Drivers record has been selected
  loaded: boolean; // has the Drivers list been loaded
  error?: string | null; // last known error (if any)
}

export interface DriversPartialState {
  readonly [DRIVERS_FEATURE_KEY]: State;
}

export const driversAdapter: EntityAdapter<DriversEntity> =
  createEntityAdapter<DriversEntity>();

export const initialState: State = driversAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const driversReducer = createReducer(
  initialState,
  on(DriversActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DriversActions.loadDriversSuccess, (state, { drivers }) =>
    driversAdapter.setAll(drivers, { ...state, loaded: true })
  ),
  on(DriversActions.loadDriversFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return driversReducer(state, action);
}

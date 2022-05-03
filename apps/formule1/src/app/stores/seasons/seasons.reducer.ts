import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createReducer, on, Action} from '@ngrx/store';

import * as SeasonsActions from './seasons.actions';
import {SeasonsEntity} from './seasons.models';

export const SEASONS_FEATURE_KEY = 'seasons';

export interface State extends EntityState<SeasonsEntity> {
  selectedId?: string | number; // which Seasons record has been selected
  loaded: boolean; // has the Seasons list been loaded
  error?: string | null; // last known error (if any)
}

export interface SeasonsPartialState {
  readonly [SEASONS_FEATURE_KEY]: State;
}

export const seasonsAdapter: EntityAdapter<SeasonsEntity> =
  createEntityAdapter<SeasonsEntity>();

export const initialState: State = seasonsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const seasonsReducer = createReducer(
  initialState,
  on(SeasonsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SeasonsActions.loadAllSeasonsSuccess, (state, {seasons}) =>
    seasonsAdapter.setAll(seasons, {...state, loaded: true})
  ),
  on(SeasonsActions.loadAllSeasonsFailure, (state, {error}) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return seasonsReducer(state, action);
}

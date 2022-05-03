import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SEASONS_FEATURE_KEY, State, seasonsAdapter } from './seasons.reducer';

// Lookup the 'Seasons' feature state managed by NgRx
export const getSeasonsState =
  createFeatureSelector<State>(SEASONS_FEATURE_KEY);

const { selectAll, selectEntities } = seasonsAdapter.getSelectors();

export const getSeasonsLoaded = createSelector(
  getSeasonsState,
  (state: State) => state.loaded
);

export const getSeasonsError = createSelector(
  getSeasonsState,
  (state: State) => state.error
);

export const getAllSeasons = createSelector(getSeasonsState, (state: State) =>
  selectAll(state)
);

export const getSeasonsEntities = createSelector(
  getSeasonsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getSeasonsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getSeasonsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

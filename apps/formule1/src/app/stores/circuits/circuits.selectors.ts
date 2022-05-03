import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CIRCUITS_FEATURE_KEY,
  State,
  circuitsAdapter,
} from './circuits.reducer';

// Lookup the 'Circuits' feature state managed by NgRx
export const getCircuitsState =
  createFeatureSelector<State>(CIRCUITS_FEATURE_KEY);

const { selectAll, selectEntities } = circuitsAdapter.getSelectors();

export const getCircuitsLoaded = createSelector(
  getCircuitsState,
  (state: State) => state.loaded
);

export const getCircuitsError = createSelector(
  getCircuitsState,
  (state: State) => state.error
);

export const getAllCircuits = createSelector(getCircuitsState, (state: State) =>
  selectAll(state)
);

export const getCircuitsEntities = createSelector(
  getCircuitsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCircuitsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCircuitsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

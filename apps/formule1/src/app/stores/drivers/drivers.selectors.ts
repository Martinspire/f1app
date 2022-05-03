import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DRIVERS_FEATURE_KEY, State, driversAdapter } from './drivers.reducer';

// Lookup the 'Drivers' feature state managed by NgRx
export const getDriversState =
  createFeatureSelector<State>(DRIVERS_FEATURE_KEY);

const { selectAll, selectEntities } = driversAdapter.getSelectors();

export const getDriversLoaded = createSelector(
  getDriversState,
  (state: State) => state.loaded
);

export const getDriversError = createSelector(
  getDriversState,
  (state: State) => state.error
);

export const getAllDrivers = createSelector(getDriversState, (state: State) =>
  selectAll(state)
);

export const getDriversEntities = createSelector(
  getDriversState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDriversState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDriversEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

import { Action } from '@ngrx/store';

import * as SeasonsActions from './seasons.actions';
import { SeasonsEntity } from './seasons.models';
import { State, initialState, reducer } from './seasons.reducer';

describe('Seasons Reducer', () => {
  const createSeasonsEntity = (id: string, name = ''): SeasonsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Seasons actions', () => {
    it('loadSeasonsSuccess should return the list of known Seasons', () => {
      const seasons = [
        createSeasonsEntity('PRODUCT-AAA'),
        createSeasonsEntity('PRODUCT-zzz'),
      ];
      const action = SeasonsActions.loadSeasonsSuccess({ seasons });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

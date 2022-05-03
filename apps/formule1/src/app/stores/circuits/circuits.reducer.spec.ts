import { Action } from '@ngrx/store';

import * as CircuitsActions from './circuits.actions';
import { CircuitsEntity } from './circuits.models';
import { State, initialState, reducer } from './circuits.reducer';

describe('Circuits Reducer', () => {
  const createCircuitsEntity = (id: string, name = ''): CircuitsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Circuits actions', () => {
    it('loadCircuitsSuccess should return the list of known Circuits', () => {
      const circuits = [
        createCircuitsEntity('PRODUCT-AAA'),
        createCircuitsEntity('PRODUCT-zzz'),
      ];
      const action = CircuitsActions.loadCircuitsSuccess({ circuits });

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

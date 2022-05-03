import { CircuitsEntity } from './circuits.models';
import {
  circuitsAdapter,
  CircuitsPartialState,
  initialState,
} from './circuits.reducer';
import * as CircuitsSelectors from './circuits.selectors';

describe('Circuits Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCircuitsId = (it: CircuitsEntity) => it.id;
  const createCircuitsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CircuitsEntity);

  let state: CircuitsPartialState;

  beforeEach(() => {
    state = {
      circuits: circuitsAdapter.setAll(
        [
          createCircuitsEntity('PRODUCT-AAA'),
          createCircuitsEntity('PRODUCT-BBB'),
          createCircuitsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Circuits Selectors', () => {
    it('getAllCircuits() should return the list of Circuits', () => {
      const results = CircuitsSelectors.getAllCircuits(state);
      const selId = getCircuitsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CircuitsSelectors.getSelected(state) as CircuitsEntity;
      const selId = getCircuitsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCircuitsLoaded() should return the current "loaded" status', () => {
      const result = CircuitsSelectors.getCircuitsLoaded(state);

      expect(result).toBe(true);
    });

    it('getCircuitsError() should return the current "error" state', () => {
      const result = CircuitsSelectors.getCircuitsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

import { DriversEntity } from './drivers.models';
import {
  driversAdapter,
  DriversPartialState,
  initialState,
} from './drivers.reducer';
import * as DriversSelectors from './drivers.selectors';

describe('Drivers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDriversId = (it: DriversEntity) => it.id;
  const createDriversEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DriversEntity);

  let state: DriversPartialState;

  beforeEach(() => {
    state = {
      drivers: driversAdapter.setAll(
        [
          createDriversEntity('PRODUCT-AAA'),
          createDriversEntity('PRODUCT-BBB'),
          createDriversEntity('PRODUCT-CCC'),
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

  describe('Drivers Selectors', () => {
    it('getAllDrivers() should return the list of Drivers', () => {
      const results = DriversSelectors.getAllDrivers(state);
      const selId = getDriversId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DriversSelectors.getSelected(state) as DriversEntity;
      const selId = getDriversId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getDriversLoaded() should return the current "loaded" status', () => {
      const result = DriversSelectors.getDriversLoaded(state);

      expect(result).toBe(true);
    });

    it('getDriversError() should return the current "error" state', () => {
      const result = DriversSelectors.getDriversError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

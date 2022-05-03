import { SeasonsEntity } from './seasons.models';
import {
  seasonsAdapter,
  SeasonsPartialState,
  initialState,
} from './seasons.reducer';
import * as SeasonsSelectors from './seasons.selectors';

describe('Seasons Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSeasonsId = (it: SeasonsEntity) => it.id;
  const createSeasonsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SeasonsEntity);

  let state: SeasonsPartialState;

  beforeEach(() => {
    state = {
      seasons: seasonsAdapter.setAll(
        [
          createSeasonsEntity('PRODUCT-AAA'),
          createSeasonsEntity('PRODUCT-BBB'),
          createSeasonsEntity('PRODUCT-CCC'),
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

  describe('Seasons Selectors', () => {
    it('getAllSeasons() should return the list of Seasons', () => {
      const results = SeasonsSelectors.getAllSeasons(state);
      const selId = getSeasonsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SeasonsSelectors.getSelected(state) as SeasonsEntity;
      const selId = getSeasonsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSeasonsLoaded() should return the current "loaded" status', () => {
      const result = SeasonsSelectors.getSeasonsLoaded(state);

      expect(result).toBe(true);
    });

    it('getSeasonsError() should return the current "error" state', () => {
      const result = SeasonsSelectors.getSeasonsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

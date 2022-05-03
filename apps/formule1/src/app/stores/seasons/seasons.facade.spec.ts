import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as SeasonsActions from './seasons.actions';
import { SeasonsEffects } from './seasons.effects';
import { SeasonsFacade } from './seasons.facade';
import { SeasonsEntity } from './seasons.models';
import {
  SEASONS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './seasons.reducer';
import * as SeasonsSelectors from './seasons.selectors';

interface TestSchema {
  seasons: State;
}

describe('SeasonsFacade', () => {
  let facade: SeasonsFacade;
  let store: Store<TestSchema>;
  const createSeasonsEntity = (id: string, name = ''): SeasonsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SEASONS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SeasonsEffects]),
        ],
        providers: [SeasonsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(SeasonsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allSeasons$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allSeasons$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadSeasonsSuccess` to manually update list
     */
    it('allSeasons$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allSeasons$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        SeasonsActions.loadSeasonsSuccess({
          seasons: [createSeasonsEntity('AAA'), createSeasonsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allSeasons$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

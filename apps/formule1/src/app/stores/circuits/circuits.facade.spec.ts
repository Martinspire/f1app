import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as CircuitsActions from './circuits.actions';
import { CircuitsEffects } from './circuits.effects';
import { CircuitsFacade } from './circuits.facade';
import { CircuitsEntity } from './circuits.models';
import {
  CIRCUITS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './circuits.reducer';
import * as CircuitsSelectors from './circuits.selectors';

interface TestSchema {
  circuits: State;
}

describe('CircuitsFacade', () => {
  let facade: CircuitsFacade;
  let store: Store<TestSchema>;
  const createCircuitsEntity = (id: string, name = ''): CircuitsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CIRCUITS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CircuitsEffects]),
        ],
        providers: [CircuitsFacade],
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
      facade = TestBed.inject(CircuitsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCircuits$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCircuits$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCircuitsSuccess` to manually update list
     */
    it('allCircuits$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCircuits$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CircuitsActions.loadCircuitsSuccess({
          circuits: [createCircuitsEntity('AAA'), createCircuitsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allCircuits$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

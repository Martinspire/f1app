import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CircuitsActions from './circuits.actions';
import * as CircuitsFeature from './circuits.reducer';
import * as CircuitsSelectors from './circuits.selectors';

@Injectable()
export class CircuitsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CircuitsSelectors.getCircuitsLoaded));
  allCircuits$ = this.store.pipe(select(CircuitsSelectors.getAllCircuits));
  selectedCircuits$ = this.store.pipe(select(CircuitsSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CircuitsActions.init());
  }
}

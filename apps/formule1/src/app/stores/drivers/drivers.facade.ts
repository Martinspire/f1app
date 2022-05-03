import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as DriversActions from './drivers.actions';
import * as DriversFeature from './drivers.reducer';
import * as DriversSelectors from './drivers.selectors';

@Injectable()
export class DriversFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(DriversSelectors.getDriversLoaded));
  allDrivers$ = this.store.pipe(select(DriversSelectors.getAllDrivers));
  selectedDrivers$ = this.store.pipe(select(DriversSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(DriversActions.init());
  }
}

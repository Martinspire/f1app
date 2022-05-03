import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as SeasonsActions from './seasons.actions';
import * as SeasonsFeature from './seasons.reducer';
import * as SeasonsSelectors from './seasons.selectors';

@Injectable()
export class SeasonsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SeasonsSelectors.getSeasonsLoaded));
  allSeasons$ = this.store.pipe(select(SeasonsSelectors.getAllSeasons));
  selectedSeasons$ = this.store.pipe(select(SeasonsSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SeasonsActions.init());
  }
}

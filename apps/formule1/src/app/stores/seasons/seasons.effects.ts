import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as SeasonsActions from './seasons.actions';
import * as SeasonsFeature from './seasons.reducer';

@Injectable()
export class SeasonsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SeasonsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return SeasonsActions.loadAllSeasonsSuccess({seasons: []});
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SeasonsActions.loadAllSeasonsFailure({error});
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) { }
}

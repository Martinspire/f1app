import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as DriversActions from './drivers.actions';
import * as DriversFeature from './drivers.reducer';

@Injectable()
export class DriversEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DriversActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return DriversActions.loadDriversSuccess({ drivers: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return DriversActions.loadDriversFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}

import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CircuitsActions from './circuits.actions';
import * as CircuitsFeature from './circuits.reducer';

@Injectable()
export class CircuitsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CircuitsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CircuitsActions.loadCircuitsSuccess({ circuits: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CircuitsActions.loadCircuitsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}

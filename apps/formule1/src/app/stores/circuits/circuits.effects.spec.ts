import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CircuitsActions from './circuits.actions';
import { CircuitsEffects } from './circuits.effects';

describe('CircuitsEffects', () => {
  let actions: Observable<Action>;
  let effects: CircuitsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CircuitsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CircuitsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CircuitsActions.init() });

      const expected = hot('-a-|', {
        a: CircuitsActions.loadCircuitsSuccess({ circuits: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

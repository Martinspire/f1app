import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Action} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {NxModule} from '@nrwl/angular';
import {hot} from 'jasmine-marbles';
import {Observable} from 'rxjs';

import * as SeasonsActions from './seasons.actions';
import {SeasonsEffects} from './seasons.effects';

describe('SeasonsEffects', () => {
  let actions: Observable<Action>;
  let effects: SeasonsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SeasonsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SeasonsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {a: SeasonsActions.init()});

      const expected = hot('-a-|', {
        a: SeasonsActions.loadAllSeasonsSuccess({seasons: []}),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

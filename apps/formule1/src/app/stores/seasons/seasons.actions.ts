import {createAction, props} from '@ngrx/store';
import {SeasonsEntity} from './seasons.models';

export const init = createAction('[Seasons Page] Init');

export const loadAllSeasonsSuccess = createAction(
  '[Seasons/API] Load All Seasons Success',
  props<{seasons: SeasonsEntity[];}>()
);

export const loadAllSeasonsFailure = createAction(
  '[Seasons/API] Load All Seasons Failure',
  props<{error: any;}>()
);

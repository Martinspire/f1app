import { createAction, props } from '@ngrx/store';
import { DriversEntity } from './drivers.models';

export const init = createAction('[Drivers Page] Init');

export const loadDriversSuccess = createAction(
  '[Drivers/API] Load Drivers Success',
  props<{ drivers: DriversEntity[] }>()
);

export const loadDriversFailure = createAction(
  '[Drivers/API] Load Drivers Failure',
  props<{ error: any }>()
);

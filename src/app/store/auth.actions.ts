import { createAction, props } from '@ngrx/store';
import { Customer } from '../core/models/commerce.models';

export const login = createAction(
  '[Account] Login',
  props<{ username: string; password: string }>(),
);
export const loginSuccess = createAction(
  '[Account] Login Success',
  props<{ customer: Customer }>(),
);
export const loginFailure = createAction('[Account] Login Failure', props<{ error: string }>());
export const logout = createAction('[Account] Logout');
export const restoreSession = createAction('[Account] Restore Session');
export const restoreSessionSuccess = createAction(
  '[Account] Restore Session Success',
  props<{ customer: Customer | null }>(),
);

import { createReducer, on } from '@ngrx/store';
import { Customer } from '../core/models/commerce.models';
import * as AuthActions from './auth.actions';

export interface AuthState {
  customer: Customer | null;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  customer: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { customer }) => ({ ...state, customer, loading: false })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(AuthActions.logout, () => initialAuthState),
  on(AuthActions.restoreSessionSuccess, (state, { customer }) => ({ ...state, customer }))
);
import { Customer } from '../core/models/commerce.models';
import { login, loginFailure, loginSuccess, logout, restoreSessionSuccess } from './auth.actions';
import { authReducer, initialAuthState } from './auth.reducer';

const customer: Customer = {
  id: 1,
  username: 'emilys',
  email: 'emily@example.com',
  firstName: 'Emily',
  lastName: 'Johnson',
  image: 'https://example.test/emily.png',
};

describe('authReducer', () => {
  it('sets loading and clears an old error when login starts', () => {
    const state = authReducer(
      { ...initialAuthState, error: 'Previous error' },
      login({ username: 'emilys', password: 'secret' }),
    );

    expect(state).toEqual({ customer: null, loading: true, error: null });
  });

  it('stores a customer after login and clears loading', () => {
    expect(authReducer({ ...initialAuthState, loading: true }, loginSuccess({ customer }))).toEqual(
      {
        customer,
        loading: false,
        error: null,
      },
    );
  });

  it('stores an error after login fails', () => {
    expect(
      authReducer({ ...initialAuthState, loading: true }, loginFailure({ error: 'Try again' })),
    ).toEqual({
      customer: null,
      loading: false,
      error: 'Try again',
    });
  });

  it('clears state on logout and restores a nullable session customer', () => {
    expect(authReducer({ customer, loading: true, error: 'x' }, logout())).toEqual(
      initialAuthState,
    );
    expect(authReducer(initialAuthState, restoreSessionSuccess({ customer }))).toEqual({
      ...initialAuthState,
      customer,
    });
    expect(
      authReducer(
        { customer, loading: false, error: null },
        restoreSessionSuccess({ customer: null }),
      ).customer,
    ).toBeNull();
  });
});

import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { firstValueFrom, of, Subject, throwError } from 'rxjs';
import { LoginResponse } from '../core/models/commerce.models';
import { AccountApiService } from '../core/services/account-api.service';
import * as AuthActions from './auth.actions';
import { AuthEffects } from './auth.effects';

const loginResponse: LoginResponse = {
  id: 1,
  username: 'emilys',
  email: 'emily@example.com',
  firstName: 'Emily',
  lastName: 'Johnson',
  image: 'https://example.test/emily.png',
  accessToken: 'access-token',
  refreshToken: 'refresh-token',
};

describe('AuthEffects', () => {
  let actions$: Subject<Action>;
  let effects: AuthEffects;
  let accountApi: { login: ReturnType<typeof vi.fn> };
  let platformId: string;

  const configure = () => {
    actions$ = new Subject<Action>();
    accountApi = { login: vi.fn() };
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: AccountApiService, useValue: accountApi },
        { provide: PLATFORM_ID, useValue: platformId },
      ],
    });
    effects = TestBed.inject(AuthEffects);
  };

  beforeEach(() => {
    sessionStorage.clear();
    platformId = 'browser';
    configure();
  });

  afterEach(() => {
    actions$.complete();
    sessionStorage.clear();
  });

  it('logs in, strips tokens from customer state, and stores the session', async () => {
    accountApi.login.mockReturnValue(of(loginResponse));
    const result = firstValueFrom(effects.login$);
    actions$.next(AuthActions.login({ username: 'emilys', password: 'emilyspass' }));

    expect(await result).toEqual(
      AuthActions.loginSuccess({
        customer: {
          id: 1,
          username: 'emilys',
          email: 'emily@example.com',
          firstName: 'Emily',
          lastName: 'Johnson',
          image: 'https://example.test/emily.png',
        },
      }),
    );
    expect(JSON.parse(sessionStorage.getItem('morrow-market-session') ?? 'null')).toEqual(
      loginResponse,
    );
  });

  it('returns a useful action when demo credentials fail', async () => {
    accountApi.login.mockReturnValue(throwError(() => new Error('invalid credentials')));
    const result = firstValueFrom(effects.login$);
    actions$.next(AuthActions.login({ username: 'wrong', password: 'wrong' }));

    expect(await result).toEqual(
      AuthActions.loginFailure({
        error: 'Those details did not match a demo account. Try the sample sign-in.',
      }),
    );
  });

  it('restores a saved customer without exposing its tokens', async () => {
    sessionStorage.setItem('morrow-market-session', JSON.stringify(loginResponse));
    const result = firstValueFrom(effects.restoreSession$);
    actions$.next(AuthActions.restoreSession());

    expect(await result).toEqual(
      AuthActions.restoreSessionSuccess({
        customer: {
          id: 1,
          username: 'emilys',
          email: 'emily@example.com',
          firstName: 'Emily',
          lastName: 'Johnson',
          image: 'https://example.test/emily.png',
        },
      }),
    );
  });

  it('returns a null customer for missing or invalid browser sessions', async () => {
    const missing = firstValueFrom(effects.restoreSession$);
    actions$.next(AuthActions.restoreSession());
    expect(await missing).toEqual(AuthActions.restoreSessionSuccess({ customer: null }));

    sessionStorage.setItem('morrow-market-session', '{broken');
    const invalid = firstValueFrom(effects.restoreSession$);
    actions$.next(AuthActions.restoreSession());
    expect(await invalid).toEqual(AuthActions.restoreSessionSuccess({ customer: null }));
  });

  it('skips session storage on the server and clears sessions on logout in browser', async () => {
    TestBed.resetTestingModule();
    platformId = 'server';
    configure();
    const serverResult = firstValueFrom(effects.restoreSession$);
    actions$.next(AuthActions.restoreSession());
    expect(await serverResult).toEqual(AuthActions.restoreSessionSuccess({ customer: null }));

    TestBed.resetTestingModule();
    platformId = 'browser';
    configure();
    sessionStorage.setItem('morrow-market-session', JSON.stringify(loginResponse));
    const subscription = effects.clearSession$.subscribe();
    actions$.next(AuthActions.logout());
    expect(sessionStorage.getItem('morrow-market-session')).toBeNull();
    subscription.unsubscribe();
  });

  it('does not save or clear session storage when actions run on the server', async () => {
    TestBed.resetTestingModule();
    platformId = 'server';
    configure();
    const setItem = vi.spyOn(Storage.prototype, 'setItem');
    accountApi.login.mockReturnValue(of(loginResponse));
    const loginResult = firstValueFrom(effects.login$);
    actions$.next(AuthActions.login({ username: 'emilys', password: 'emilyspass' }));
    expect((await loginResult).type).toBe(AuthActions.loginSuccess.type);
    expect(setItem).not.toHaveBeenCalled();

    const removeItem = vi.spyOn(Storage.prototype, 'removeItem');
    const subscription = effects.clearSession$.subscribe();
    actions$.next(AuthActions.logout());
    expect(removeItem).not.toHaveBeenCalled();
    subscription.unsubscribe();
    setItem.mockRestore();
    removeItem.mockRestore();
  });
});

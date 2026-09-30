import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AccountApiService } from '../core/services/account-api.service';
import { Customer, LoginResponse } from '../core/models/commerce.models';
import * as AuthActions from './auth.actions';

const SESSION_KEY = 'morrow-market-session';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly accountApi = inject(AccountApiService);
  private readonly platformId = inject(PLATFORM_ID);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        this.accountApi.login(username, password).pipe(
          tap((response) => this.saveSession(response)),
          map((response) => AuthActions.loginSuccess({ customer: this.toCustomer(response) })),
          catchError(() =>
            of(AuthActions.loginFailure({ error: 'Those details did not match a demo account. Try the sample sign-in.' }))
          )
        )
      )
    )
  );

  restoreSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.restoreSession),
      map(() => {
        if (!isPlatformBrowser(this.platformId)) return null;
        try {
          const saved = sessionStorage.getItem(SESSION_KEY);
          return saved ? JSON.parse(saved) as LoginResponse : null;
        } catch {
          return null;
        }
      }),
      map((response) =>
        AuthActions.restoreSessionSuccess({ customer: response ? this.toCustomer(response) : null })
      )
    )
  );

  clearSession$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          if (isPlatformBrowser(this.platformId)) sessionStorage.removeItem(SESSION_KEY);
        })
      ),
    { dispatch: false }
  );

  private saveSession(response: LoginResponse): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(response));
    }
  }

  private toCustomer(response: LoginResponse): Customer {
    const { accessToken: _accessToken, refreshToken: _refreshToken, ...customer } = response;
    return customer;
  }
}
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, logout } from '../../store/auth.actions';
import {
  selectAuthError,
  selectAuthLoading,
  selectCustomer,
  selectOrders,
} from '../../store/shop.selectors';

@Component({
  selector: 'app-account',
  imports: [CurrencyPipe, DatePipe, ReactiveFormsModule, RouterLink],
  template: `
    <section class="account-page page-wrap">
      @if (customer(); as user) {
        <div class="account-heading">
          <div>
            <span class="eyebrow">Your corner</span>
            <h1 class="display-title">Hello, {{ user.firstName }}.</h1>
            <p>Good to see you back.</p>
          </div>
          <button class="secondary-button" type="button" (click)="signOut()">Sign out</button>
        </div>
        <div class="account-layout">
          <aside class="profile-panel">
            <img
              [src]="user.image"
              [alt]="user.firstName + ' ' + user.lastName"
              width="72"
              height="72"
            />
            <h2>{{ user.firstName }} {{ user.lastName }}</h2>
            <p>{{ user.email }}</p>
            <span class="demo-badge">DEMO ACCOUNT</span>
          </aside>
          <section class="orders-panel">
            <div class="panel-heading">
              <div>
                <span class="eyebrow">Kept close</span>
                <h2>Your orders</h2>
              </div>
              <span>{{ orders().length }} saved</span>
            </div>
            @if (orders().length > 0) {
              @for (order of orders(); track order.id) {
                <article class="account-order">
                  <div>
                    <strong>{{ order.id }}</strong
                    ><span>{{ order.placedAt | date: 'mediumDate' }}</span>
                  </div>
                  <div>
                    <span
                      >{{ order.items.length }}
                      {{ order.items.length === 1 ? 'item' : 'items' }}</span
                    ><strong>{{ order.total | currency }}</strong>
                  </div>
                </article>
              }
            } @else {
              <div class="no-orders">
                <p>Your next good find will show up here.</p>
                <a class="secondary-button" routerLink="/">Browse the collection</a>
              </div>
            }
          </section>
        </div>
      } @else {
        <div class="login-layout">
          <div class="login-intro">
            <span class="eyebrow">Your Morrow account</span>
            <h1 class="display-title">Keep the good things close.</h1>
            <p>Sign in to find your saved details and orders in one place.</p>
            <div class="login-note">
              <span>✳</span> A demo account lets you try the flow. No personal payment data is used.
            </div>
          </div>
          <form class="login-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <h2>Welcome back.</h2>
            <p>Sign in to your account</p>
            <label class="field"
              >Username<input
                type="text"
                formControlName="username"
                autocomplete="username"
                placeholder="Your username"
              />
              @if (form.controls.username.touched && form.controls.username.invalid) {
                <small>Enter your username.</small>
              }
            </label>
            <label class="field"
              >Password<input
                type="password"
                formControlName="password"
                autocomplete="current-password"
                placeholder="Your password"
              />
              @if (form.controls.password.touched && form.controls.password.invalid) {
                <small>Enter your password.</small>
              }
            </label>
            @if (error()) {
              <p class="login-error" role="alert">{{ error() }}</p>
            }
            <button class="primary-button login-button" type="submit" [disabled]="loading()">
              {{ loading() ? 'Checking…' : 'Sign in' }}
            </button>
            <button class="sample-button" type="button" (click)="useDemoAccount()">
              Use sample sign-in
            </button>
            <p class="credential-note">
              Sample account: <strong>emilys</strong> / <strong>emilyspass</strong>
            </p>
          </form>
        </div>
      }
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    .account-page {
      min-height: 490px;
      padding-top: 54px;
    }
    .login-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(300px, 390px);
      gap: 64px;
      align-items: center;
      padding-block: 35px 55px;
    }
    .login-intro {
      max-width: 460px;
    }
    .login-intro .eyebrow {
      display: block;
      margin-bottom: 14px;
    }
    .login-intro p {
      max-width: 350px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.7;
    }
    .login-note {
      display: flex;
      align-items: start;
      gap: 9px;
      max-width: 360px;
      margin-top: 35px;
      padding: 13px;
      background: #e7ece4;
      color: var(--sage-deep);
      font-size: 10px;
      line-height: 1.6;
    }
    .login-note span {
      color: var(--coral);
    }
    .login-form {
      display: grid;
      gap: 14px;
      padding: 25px;
      border: 1px solid var(--line);
      background: var(--surface);
    }
    .login-form h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 26px;
      font-weight: 500;
    }
    .login-form > p {
      margin: -10px 0 2px;
      color: var(--muted);
      font-size: 10px;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 7px;
      color: #4c554c;
      font-size: 10px;
      font-weight: 600;
    }
    .field input {
      height: 43px;
      padding: 0 11px;
      border: 1px solid var(--line);
      border-radius: 2px;
      background: #fffefa;
      font-size: 12px;
    }
    .field small,
    .login-error {
      color: #ad442d;
      font-size: 9px;
    }
    .login-error {
      margin: 0;
    }
    .login-button {
      width: 100%;
    }
    .login-button:disabled {
      opacity: 0.65;
      cursor: wait;
    }
    .sample-button {
      min-height: 40px;
      border: 1px solid var(--line);
      background: transparent;
      color: var(--ink);
      font-size: 10px;
      font-weight: 600;
    }
    .sample-button:hover {
      border-color: var(--ink);
    }
    .credential-note {
      margin: -3px 0 0 !important;
      text-align: center;
      font-size: 9px !important;
    }
    .account-heading {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding-bottom: 22px;
      border-bottom: 1px solid var(--line);
    }
    .account-heading .eyebrow {
      display: block;
      margin-bottom: 10px;
    }
    .account-heading p {
      margin: 9px 0 0;
      color: var(--muted);
      font-size: 11px;
    }
    .account-layout {
      display: grid;
      grid-template-columns: 230px minmax(0, 1fr);
      gap: 32px;
      padding-top: 28px;
    }
    .profile-panel {
      min-height: 210px;
      padding: 20px;
      border: 1px solid var(--line);
      background: var(--surface);
      text-align: center;
    }
    .profile-panel img {
      width: 72px;
      height: 72px;
      margin: auto;
      border-radius: 50%;
      object-fit: cover;
    }
    .profile-panel h2 {
      margin: 12px 0 4px;
      font-family: var(--font-display);
      font-size: 19px;
      font-weight: 500;
    }
    .profile-panel p {
      margin: 0 0 12px;
      color: var(--muted);
      font-size: 10px;
    }
    .demo-badge {
      padding: 5px 7px;
      background: #f0e9d9;
      color: #715d38;
      font-size: 8px;
      font-weight: 700;
    }
    .orders-panel {
      padding: 20px;
      border: 1px solid var(--line);
      background: var(--surface);
    }
    .panel-heading {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--line);
    }
    .panel-heading .eyebrow {
      display: block;
      margin-bottom: 6px;
    }
    .panel-heading h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 23px;
      font-weight: 500;
    }
    .panel-heading > span {
      color: var(--muted);
      font-size: 9px;
    }
    .account-order {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding-block: 15px;
      border-bottom: 1px solid var(--line);
      font-size: 10px;
    }
    .account-order div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .account-order div:last-child {
      align-items: end;
    }
    .account-order span {
      color: var(--muted);
    }
    .no-orders {
      min-height: 130px;
      display: grid;
      place-content: center;
      justify-items: center;
      gap: 10px;
      color: var(--muted);
      font-size: 11px;
    }
    @media (max-width: 700px) {
      .account-page {
        padding-top: 38px;
      }
      .login-layout {
        grid-template-columns: 1fr;
        gap: 25px;
        padding-top: 28px;
      }
      .login-note {
        margin-top: 20px;
      }
      .account-layout {
        grid-template-columns: 1fr;
      }
      .profile-panel {
        min-height: auto;
      }
    }
  `,
})
export class AccountComponent {
  private readonly store = inject(Store);
  private readonly formBuilder = inject(FormBuilder).nonNullable;
  readonly customer = this.store.selectSignal(selectCustomer);
  readonly loading = this.store.selectSignal(selectAuthLoading);
  readonly error = this.store.selectSignal(selectAuthError);
  readonly orders = this.store.selectSignal(selectOrders);
  readonly form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  useDemoAccount(): void {
    this.form.setValue({ username: 'emilys', password: 'emilyspass' });
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.store.dispatch(login(this.form.getRawValue()));
  }

  signOut(): void {
    this.store.dispatch(logout());
  }
}

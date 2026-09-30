import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/commerce.models';

@Injectable({ providedIn: 'root' })
export class AccountApiService {
  private readonly http = inject(HttpClient);

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://dummyjson.com/auth/login', {
      username,
      password,
      expiresInMins: 60,
    });
  }
}
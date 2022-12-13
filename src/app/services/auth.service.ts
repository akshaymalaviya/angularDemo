import { Observable, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() != null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({ email, password }: any): Observable<any> {
    if (email == 'admin@gmail.com' && password == '123456') {
      this.setToken('qwertyuiop');
      return of({ name: 'akshay', email: 'admin@gamil.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}

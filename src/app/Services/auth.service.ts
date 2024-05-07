import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/Login_gn/';
const TOKEN_KEY = 'auth-token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API , {
      username,
      password
    }, httpOptions).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem(TOKEN_KEY, response.token); // Stockez le token dans le localStorage
        }
        return response;
      }));
  }
  
  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  getUserIdFromToken(): number | null {
    const token = this.getToken();
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      return tokenPayload.id; // Assurez-vous que userId correspond à la clé dans votre token
    }
    return null;
  }

}
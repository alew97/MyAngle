import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateLogin(user: User) {
    return this.http.post('/api/user/login', {
      email: user.email,
      password: user.password
    })
  }

  addUser(user: User) {
    return this.http.post('/api/user/register', {
      name: user.name,
      email: user.email,
      password: user.password
    })
  }
}

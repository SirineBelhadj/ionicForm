import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
   })
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    let token = localStorage.getItem('loggedIn');
    // Check whether the token is expired and return
    // true or false
    return token=='1'?true:false;
  }
}
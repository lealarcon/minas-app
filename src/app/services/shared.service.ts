import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public token
  public idUser

  constructor(

    private _router: Router
 ) { }



  getToken() {
    let token = localStorage.getItem('accessToken');
    this.token = null;
    if (token) {
      this.token = token;
    }
    return this.token;
  }

  setToken(token: any) {
    localStorage.setItem('accessToken', token);
  }



  getUserId() {
    let idUser = localStorage.getItem('currentUser');
    this.idUser = null;
    if (idUser) {
      this.idUser = idUser;
    }
    return this.idUser;
  }

  setUserId(idUser: any) {
    localStorage.setItem('currentUser', JSON.stringify(idUser));
  }

  logOutUser() {
    localStorage.clear();
    localStorage.removeItem('accessToken');
     localStorage.removeItem('currentUser');
    this._router.navigate(['']);
  }


}

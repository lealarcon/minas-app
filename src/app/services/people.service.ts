import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/class/user';
import { Products } from '../models/class/user copy';


// Services
import { HttpService } from './http.service';




@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private _httpService: HttpService,
  ) { }


  // Funciones Propias
  getUser(id: any, filters?: string): Observable<User> {
    let url: string = `/users/${id}`;
    url += filters ? `?filter={"include":${filters}}` : '';
    return this._httpService.httpGet(url);
  }
  loginUser(data): Observable<User> {
    let url: string = `/users/login`;
    return this._httpService.httpPost(url,data);
  }

  

  newUser(data: any): Observable<User> {
    let url: string = '/users';
    return this._httpService.httpPost(url, data);
  }
  newProduct(data: any): Observable<User> {
    let url: string = '/products';
    return this._httpService.httpPost(url, data);
  }

  getProducts(filters?: string): Observable<Products[]> {
    let url: string = `/products`;
    url += filters ? `?filter=${filters}` : '';
    return this._httpService.httpGet(url);
  }

}

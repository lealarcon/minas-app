import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

// Servicios

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.sass']
})
export class PrivateComponent implements OnInit{

  public show: boolean = false;

  constructor(
    private _router: Router,
    private _sharedService: SharedService
  ) { }

  ngOnInit() {

    let token = this._sharedService.getToken()
    if (token==null){
      this._router.navigate(['']);

    }
  }

  /****************************** Funciones Propias **********************/
  logout(){
    this._sharedService.logOutUser()
  }

}

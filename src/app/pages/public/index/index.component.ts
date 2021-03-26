import { Component, OnInit, NgZone, TestabilityRegistry } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/class/user';
import { PeopleService } from 'src/app/services/people.service';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public register: boolean = false
  public login: boolean = false
  public newUser: User = new User()

  constructor(
    private _peopleService: PeopleService,
    private _router: Router,
    private _sharedService: SharedService
  ) {

  }





  ngOnInit() {

    if (this._sharedService.getToken() != null)
      this._router.navigate(['/home']);


  }


  loginUser() {

    if (this.newUser.email && this.newUser.password) {
      this._peopleService.loginUser(this.newUser).pipe(take(1)).subscribe(data => {

        Swal.fire({
          title: 'Usuario logeado',
          text: 'Puede Ingresar a la plataforma',
          icon: 'success',
        })
        this._router.navigate(['/home']);
        this._sharedService.setToken(data.id)
        this._sharedService.setUserId(data["userId"])

      }, err => {
        Swal.fire({
          title: 'Error!',
          text: 'Intenta de nuevo',
          icon: 'error'
        })

      })

    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Debes llenar todos los campos',
        icon: 'error'
      })
    }
  }


  registerNewUser() {
    if (this.newUser.email && this.newUser.password && this.newUser.realm) {
      this._peopleService.newUser(this.newUser).pipe(take(1)).subscribe(data => {
        this.login = false
        this.register = false
        this.newUser = new User()
        Swal.fire({
          title: 'Nuevo usuario',
          text: 'Puede Ingresar a la plataforma',
          icon: 'success',
        })

      }, err => {
        Swal.fire({
          title: 'Error!',
          text: 'Intenta de nuevo',
          icon: 'error'
        })

      })
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Debes llenar todos los campos',
        icon: 'error'
      })
    }
  }



}
"use strict";
import { Component, OnInit } from "@angular/core";

// Services
import { SharedService } from "src/app/services/shared.service";

// Models
import { PeopleService } from "src/app/services/people.service";
import { take } from "rxjs/operators";
import { Products } from "src/app/models/class/user copy";
import Swal from 'sweetalert2'
import { Router } from "@angular/router";



@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.sass"],
})

export class CreateComponent implements OnInit {

  public product :  Products = new Products()

  constructor(
    private _sharedService: SharedService,
    private _peopleService:PeopleService,
    private _router:Router,
  ) {
    
   }

  ngOnInit() {
   
  }

  createProduct(){
    this.product.userId= this._sharedService.getUserId()
    this._peopleService.newProduct(this.product).pipe(take(1)).subscribe(data=>{

      this._router.navigate(['/home']);

    },error=>{
      Swal.fire({
        title: 'Error!',
        text: 'Intenta de nuevo',
        icon: 'error'
      })

    })
  }

}

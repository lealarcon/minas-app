"use strict";
import { Component, OnInit } from "@angular/core";

// Services
import { SharedService } from "src/app/services/shared.service";

// Models
import { PeopleService } from "src/app/services/people.service";
import { take } from "rxjs/operators";
import { Products } from "src/app/models/class/user copy";



@Component({
  selector: "app-primer",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})

export class HomeComponent implements OnInit {

  public products :  Products[] =[]

  constructor(
    private _sharedService: SharedService,
    private _peopleService:PeopleService,
  ) {
    
   }

  ngOnInit() {
    let filter={
      order: "id DESC",
      include: ["user"]
    }
   this._peopleService.getProducts(JSON.stringify(filter)).pipe(take(1)).subscribe(data=>{
     this.products=data
   })
  }


}

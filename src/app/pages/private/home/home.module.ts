import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { HomeComponent } from "./home.component";



const APP_ROUTES: Routes = [
  { path: "",data: { breadcrumb: null, }, component: HomeComponent },
  { path: "create",data: { breadcrumb: null, }, component: CreateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES),
    CommonModule,
    FormsModule,
   
    
  ],
  declarations: [
    HomeComponent,
    CreateComponent
    

    //Modals
    
    
  ],
  providers: [],
})
export class HomeModule {}

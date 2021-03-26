import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Modulos Propios

// Componentes Propios
import { IndexComponent } from "./index/index.component";
import { RouterModule, Routes } from "@angular/router";


const APP_ROUTES: Routes = [
  // { path: "", component: IndexComponent, canActivate: [LogoutGuard] },
   { path: "", component: IndexComponent  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APP_ROUTES),
  ],
  declarations: [IndexComponent],
})
export class PublicModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";



import { HttpClient, HttpClientModule } from "@angular/common/http";



// Modulos Propios

// Componentes Propios
import { PrivateComponent } from "./../../../app/pages/private/private.component";


const APP_ROUTES: Routes = [
  {
    path: "",
    component: PrivateComponent,
    data: {
      action: 'go',
    },

    children: [
      { path: "", pathMatch: "full", redirectTo: "home" },
      {
        path: "home",
        data: {
        },
        runGuardsAndResolvers: "always",
        loadChildren: () =>
          import("./home/home.module").then(
            (m) => m.HomeModule
          ),
      },
    
    ],
  },
  { path: "**", component: PrivateComponent },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(APP_ROUTES),
    
  ],
  declarations: [
    PrivateComponent,
   
  ],
})
export class PrivateModule { }

export function HttpLoaderFactory(http: HttpClient) {

}

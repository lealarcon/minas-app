import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "public" },
  {
    path: "public",
    data: { },
    loadChildren: () =>
      import("./pages/public/public.module").then(
        (m) => m.PublicModule
      ),
  },
  {
    path: "home",
    data: { },
    loadChildren: () =>
      import("./pages/private/private.module").then(
        (m) => m.PrivateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

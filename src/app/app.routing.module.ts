import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/admin/admin-layout.module').then(
        (x) => x.AdminLayoutModule
      ),
  },
  // {
  //   path: 'user',
  //   loadChildren: () =>
  //     import('./layout/default/default-layout.module').then(
  //       (x) => x.DefaultLayoutModule
  //     ),
  // },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

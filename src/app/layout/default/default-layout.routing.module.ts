import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/default/default.module').then(
            (m) => m.DefaultModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../../modules/default/default.module').then(
            (m) => m.DefaultModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../../modules/default/default.module').then(
            (m) => m.DefaultModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultLayoutRoutingModule {}

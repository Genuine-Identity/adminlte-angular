import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        // path: '', loadChildren: '../../modules/default/default.module#DefaultModule',
        loadChildren: () =>
          import('../../modules/default/default.module').then(
            (x) => x.DefaultModule
          ),
      },
      {
        path: 'login', loadChildren: () =>
        import('../../modules/default/default.module').then(
          (x) => x.DefaultModule
        ),
      },
       {
        path: 'register', loadChildren: () =>
        import('../../modules/default/default.module').then(
          (x) => x.DefaultModule
        ),
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DefaultLayoutRoutingModule { }
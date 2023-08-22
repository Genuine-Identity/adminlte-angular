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
        path: '', loadChildren: '../../modules/default/default.module#DefaultModule',
      },
      {
        path: 'login', loadChildren: '../../modules/default/default.module#DefaultModule',
      },
       {
        path: 'register', loadChildren: '../../modules/default/default.module#DefaultModule',
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
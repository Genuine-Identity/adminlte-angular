import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/admin/admin-layout.module').then(
        (m) => m.AdminLayoutModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./layout/default/default-layout.module').then(
        (m) => m.DefaultLayoutModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

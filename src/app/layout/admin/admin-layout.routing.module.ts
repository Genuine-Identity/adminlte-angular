import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        // loadChildren:
        //   "../../modules/dashboard/dashboard.module#DashboardModule",
        loadChildren: () =>
          import('../../modules/dashboard/dashboard.module').then(
            (x) => x.DashboardModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../modules/dashboard/dashboard.module').then(
            (x) => x.DashboardModule
          ),

        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Dashboard',
          breadcrumbs: 'Dashboard',
          title: 'Dashboard Title',
          smallText: 'Dashboard Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
      {
        path: 'admin',
        // loadChildren: '../../modules/admin/admin.module#AdminModule',
        loadChildren: () =>
          import('../../modules/admin/admin.module').then((x) => x.AdminModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Admin',
          breadcrumbs: 'Admin',
          title: 'Admin Title',
          smallText: 'Admin Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
      {
        path: 'mail',
        // loadChildren: '../../modules/mail/mail.module#MailModule',
        loadChildren: () =>
          import('../../modules/mail/mail.module').then((x) => x.MailModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Mail',
          breadcrumbs: 'Mail',
          title: 'Dashboard Title',
          smallText: 'Dashboard Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
      {
        path: 'search',
        // loadChildren: '../../modules/search/search.module#SearchModule',
        loadChildren: () =>
          import('../../modules/search/search.module').then(
            (x) => x.SearchModule
          ),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Search',
          breadcrumbs: 'Search',
          title: 'Search Title',
          smallText: 'Search Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
      {
        path: 'system',
        loadChildren: '../../modules/system/system.module#SystemModule',
        loadChildren: () =>
          import('../../modules/system/system.module').then(
            (x) => x.SearchModule
          ),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'System',
          breadcrumbs: 'System',
          title: 'System Title',
          smallText: 'System Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule {}
